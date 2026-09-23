import { Observable } from "rxjs";
import { LoginRequestDto } from "../../data/dto/login-request-dto";
import { LoginResponseDto } from "../../data/dto/login-response-dto";

export interface LoginAuthInterface {
    loginAuth(complementPath : string, loginRequest : LoginRequestDto) : Observable<LoginResponseDto>
}