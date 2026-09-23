import { Observable } from "rxjs"
import { MessageResponseDto } from "../../data/dto/message-response-dto"
import { UsuarioResponseDto } from "../../data/dto/usuario-response-dto"

export interface SessionInterface {
    logout(complementPath : string) : Observable<MessageResponseDto>
    me(complementPath : string) : Observable<UsuarioResponseDto>
}