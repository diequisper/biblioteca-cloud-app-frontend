import { inject, Injectable } from "@angular/core";
import { UsuarioInterface } from "../../domain/repositories/usuario-interface";
import { BibBackendUtil } from "../sources/remote/utilities/bib-back.util";
import { Observable } from "rxjs";
import { Usuario } from "../../domain/entities/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements UsuarioInterface {

  private bibBackUtil = inject(BibBackendUtil);
    
  registrarUsuario(complimentPath : string, usuario : Usuario): Observable<{ message: string; }> {
      return this.bibBackUtil.postUsuario(complimentPath, usuario);
  }

}