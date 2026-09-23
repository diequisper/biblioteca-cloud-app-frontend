import { Component, computed, inject, Signal} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { RegistrarUsuarioUC } from '../../../domain/use-cases/usuario-usecase';
import { Usuario } from '../../../domain/entities/usuario';
import { ToastService } from '../../services/toast-service';
import { LoginAuthUC } from '../../../domain/use-cases/loginAuth-usecase';
import { LoginRequestDto } from '../../../data/dto/login-request-dto';
import { LoginAuthService } from '../../../data/services/login-auth.service';
import { SessionService } from '../../../data/services/session.service';
import { SessionUC } from '../../../domain/use-cases/session-usecase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-overlay-form',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login-overlay-form.component.html',
  styleUrl: './login-overlay-form.component.css'
})
export class LoginOverlayFormComponent{
  
  private registrarUsuarioUC = inject(RegistrarUsuarioUC);
  private loginAuthUC = inject(LoginAuthUC);
  private sessionService = inject(SessionService);
  private sessionUC = inject(SessionUC);
  userNombre ?: string = undefined;
  username ?: string = undefined;
  whichView : "reg" | "login" | "loggedin" = "login"
  regUserMessage : string = "";
  ongoingMessage : Signal<boolean> = computed(() => this.toastService.toastParams().outgoing);

  constructor(private toastService : ToastService,
              private loginAuthService : LoginAuthService,
              private router : Router){
    this.loginAuthService.isAuthenticated$.subscribe(isAuthenticated => {
        this.whichView = isAuthenticated ? "loggedin" : "login"
    })
    this.sessionService.authUser$.subscribe(u => {
        this.userNombre = u?.nombre;
        this.username = u?.username;
    })
  }
  
  loginAuth(form : NgForm){
    const loginRequest : LoginRequestDto = {
      ...form.value
    }
    if(this.ongoingMessage() != true){
      this.loginAuthUC.execute(loginRequest).subscribe({
        next : resp => {
          this.toastService.pushToastParams(resp.message, 5000);
          this.sessionUC.me().subscribe();
        },
        error : err => {
          this.toastService.pushToastParams(err.error.message, 5000)
        }
      })
    }
  }

  logout(){
    if(this.ongoingMessage() != true){
      this.sessionUC.logout().subscribe({
        next : resp => {
          this.toastService.pushToastParams(resp.message, 5000);
          this.whichView = "login";
          this.userNombre = undefined;
          this.username = undefined;
          this.router.navigate(['/']);
        },
        error : err => {
          this.toastService.pushToastParams(err.error.message, 5000);
          this.whichView = "login";
          this.userNombre = undefined;
          this.username = undefined;
          this.router.navigate(['/']);
        }
      })
    }
  }

  registrarUsuario(form : NgForm){
    if(this.ongoingMessage() != true){
      const usuario : Usuario = { 
        ...form.value,
        edad : Number(form.value.edad),
        rol : "usuario"
      }

      this.registrarUsuarioUC.execute(usuario).subscribe({
        next : resp => {
          this.regUserMessage = resp.message;
          this.toastService.pushToastParams(this.regUserMessage, 5000);
          this.whichView = 'login'
          this.router
        },
        error : err => {
          this.regUserMessage = err.error.message;
          this.toastService.pushToastParams(this.regUserMessage, 5000);
        }
      });
    }
  }
 
}
