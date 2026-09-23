import { inject, Injectable } from '@angular/core';
import { SessionInterface } from '../../domain/repositories/session-interface';
import { BehaviorSubject, Observable, shareReplay, tap } from 'rxjs';
import { MessageResponseDto } from '../dto/message-response-dto';
import { UsuarioResponseDto } from '../dto/usuario-response-dto';
import { BibBackendUtil } from '../sources/remote/utilities/bib-back.util';
import { LoginAuthService } from './login-auth.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService implements SessionInterface {

  private bibBackUtil = inject(BibBackendUtil)
  private loginAuthService = inject(LoginAuthService)

  private userSubject = new BehaviorSubject<UsuarioResponseDto | undefined>(undefined);
  authUser$ = this.userSubject.asObservable();
  private meRequest$?: Observable<UsuarioResponseDto>;

  constructor() {
    console.log('SESSION SERVICE CREATED');
  }

  logout(complementPath: string): Observable<MessageResponseDto> {
    return this.bibBackUtil.postLogout(complementPath)
              .pipe(
                tap(() => {
                  this.loginAuthService.setAuthenticated(false);
                  this.userSubject.next(undefined);
                  this.meRequest$ = undefined;
                })
              );
  }
  me(complementPath: string): Observable<UsuarioResponseDto> {
    if (!this.meRequest$) {
      this.meRequest$ = this.bibBackUtil.getMe(complementPath)
                  .pipe(
                    tap(resp => {
                      const thisUser = new UsuarioResponseDto(resp.nombre, resp.username);
                      this.loginAuthService.setAuthenticated(true);
                      this.userSubject.next(thisUser);
                      
                    }),
                    shareReplay(1)
                  )
    }

    return this.meRequest$;
  }
 
}
