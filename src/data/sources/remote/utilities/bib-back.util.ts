import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BACKEND_URL } from '../api/bib-backend';
import { Usuario } from '../../../../domain/entities/usuario';
import { LoginRequestDto } from '../../../dto/login-request-dto';
import { LoginResponseDto } from '../../../dto/login-response-dto';
import { MessageResponseDto } from '../../../dto/message-response-dto';
import { UsuarioResponseDto } from '../../../dto/usuario-response-dto';

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

  postUsuario(complementPath : string, usuario : Usuario){
    return this.http.post<{ message: string; }>(`${this.backendUrl}/${complementPath}`, usuario)
  }

  loginAuth(complementPath : string, loginRequest : LoginRequestDto){
    return this.http.post<LoginResponseDto>(`${this.backendUrl}/${complementPath}`,loginRequest, {withCredentials : true})
  }

  postLogout(complementPath : string){
    return this.http.post<MessageResponseDto>(`${this.backendUrl}/${complementPath}`, null, {withCredentials : true})
  }

  getMe(complementPath : string){
    return this.http.get<UsuarioResponseDto>(`${this.backendUrl}/${complementPath}`, { withCredentials: true })
  }
}
