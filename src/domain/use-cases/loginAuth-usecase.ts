import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { LoginAuthService } from "../../data/services/login-auth.service";
import { LoginRequestDto } from "../../data/dto/login-request-dto";
import { LoginResponseDto } from "../../data/dto/login-response-dto";


@Injectable({ providedIn: 'root' })
export class LoginAuthUC {

  constructor(private loginAuthService : LoginAuthService) {}

  execute(loginRequest : LoginRequestDto) : Observable<LoginResponseDto> {
    const path = 'auth/autenticarLogin';
    return this.loginAuthService.loginAuth(path, loginRequest);
  }
}