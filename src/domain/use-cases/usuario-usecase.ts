import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { UsuarioService } from "../../data/services/usuario.service";
import { Usuario } from "../entities/usuario";


@Injectable({ providedIn: 'root' })
export class RegistrarUsuarioUC {

  constructor(private usuarioService : UsuarioService) {
  }

  execute(usuario : Usuario) : Observable<{message : string}> {
    const path = 'usuario/CrearUsuario';
    return this.usuarioService.registrarUsuario(path, usuario);
  }
}