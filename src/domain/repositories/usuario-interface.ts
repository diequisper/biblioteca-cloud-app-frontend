import { Observable } from "rxjs";
import { Libro } from "../entities/libro";
import { Usuario } from "../entities/usuario";

export interface UsuarioInterface {
  registrarUsuario(complimentPath : string, usuario : Usuario) : Observable<{message : string}>
}