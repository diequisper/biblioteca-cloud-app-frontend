import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BACKEND_URL } from '../api/bib-backend';
import { Usuario } from '../../../../domain/entities/usuario';

@Injectable({
  providedIn: 'root'
})
export class BibBackendUtil {

  private http = inject(HttpClient);
  private backendUrl = inject(BACKEND_URL);

  get<T>(path : string){
    console.log('GET:', `${this.backendUrl}/${path}`);
    return this.http.get<T>(`${this.backendUrl}/${path}`);
  }

  postUsuario<T>(complimentPath : string, usuario : Usuario){
    return this.http.post<{ message: string; }>(`${this.backendUrl}/${complimentPath}`, usuario)
  }
}
