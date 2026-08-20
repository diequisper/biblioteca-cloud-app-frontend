import { Component, computed, EventEmitter, inject, Output, Signal} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { RegistrarUsuarioUC } from '../../../domain/use-cases/usuario-usecase';
import { Usuario } from '../../../domain/entities/usuario';
import { ToastService } from '../../services/toast-service';

@Component({
  selector: 'app-login-overlay-form',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login-overlay-form.component.html',
  styleUrl: './login-overlay-form.component.css'
})
export class LoginOverlayFormComponent{
  
  private registrarUsuarioUC = inject(RegistrarUsuarioUC);
  isRegistrarForm : boolean = false;
  regUserMessage : string = "";
  ongoingMessage : Signal<boolean> = computed(() => this.toastService.toastParams().outgoing);

  constructor(private toastService : ToastService){}

  login(username : string, password : string) : string{
    return ""
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
        },
        error : err => {
          this.regUserMessage = err.error.message;
          this.toastService.pushToastParams(this.regUserMessage, 5000);
          console.log("error", err.error);
        }
      });
    }
  }
 
}
