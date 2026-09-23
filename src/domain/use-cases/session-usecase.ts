import { Injectable } from "@angular/core";
import { SessionService } from "../../data/services/session.service";
import { Observable } from "rxjs";
import { MessageResponseDto } from "../../data/dto/message-response-dto";
import { UsuarioResponseDto } from "../../data/dto/usuario-response-dto";

@Injectable({providedIn : "root"})
export class SessionUC {

    constructor(private sessionService : SessionService){}

    logout() : Observable<MessageResponseDto>{
        const path = 'auth/logout';
        return this.sessionService.logout(path) 
    }

    me() : Observable<UsuarioResponseDto>{
        const path = 'auth/me';
        return this.sessionService.me(path)
    }
}