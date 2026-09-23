import { Observable } from "rxjs";
import { Usuario } from "../entities/usuario";

export interface UsuarioInterface {
  registrarUsuario(complementPath : string, usuario : Usuario) : Observable<{message : string}>
}