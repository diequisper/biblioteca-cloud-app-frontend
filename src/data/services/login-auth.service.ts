import { inject, Injectable } from '@angular/core';
import { LoginAuthInterface } from '../../domain/repositories/login-auth-interface';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { LoginRequestDto } from '../dto/login-request-dto';
import { LoginResponseDto } from '../dto/login-response-dto';
import { BibBackendUtil } from '../sources/remote/utilities/bib-back.util';
import { UsuarioResponseDto } from '../dto/usuario-response-dto';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService implements LoginAuthInterface{

  private bibBackUtil = inject(BibBackendUtil);

  private authSubject = new BehaviorSubject<boolean>(false);

  isAuthenticated$ = this.authSubject.asObservable();

  constructor() { }

  loginAuth(complementPath: string, loginRequest: LoginRequestDto): Observable<LoginResponseDto> {
    
    return this.bibBackUtil.loginAuth(complementPath, loginRequest)
            .pipe(
              tap(() => {
                this.authSubject.next(true);
              })
            )
  }

  setAuthenticated(value: boolean): void {
    this.authSubject.next(value);
  }
}
