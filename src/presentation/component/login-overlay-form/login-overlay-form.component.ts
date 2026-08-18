import { Component, inject} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { RegistrarUsuarioUC } from '../../../domain/use-cases/usuario-usecase';
import { Usuario } from '../../../domain/entities/usuario';

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

  constructor(){}

  login(username : string, password : string) : string{
    return ""
  }

  registrarUsuario(form : NgForm){
    const usuario : Usuario = {
      ...form.value,
      rol : "usuario"
    }

    this.registrarUsuarioUC.execute(usuario).subscribe({
      next : resp => {
        this.regUserMessage = resp.message;
        console.log(this.regUserMessage)
      },
      error : err => {
        this.regUserMessage = err.error.message;
        console.log(this.regUserMessage)
      }
    });
  }
 
}
