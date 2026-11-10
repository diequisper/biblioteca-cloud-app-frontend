import { Observable } from "rxjs";
import { MessageResponseDto } from "../../data/dto/message-response-dto";
import { Autor } from "../entities/autor";

export interface BookmarkInterface{
    getAllByUser<T>(complementPath : string) : Observable<T>
    createBookmark(complementPath : string, genId : number | undefined, paramName : string) : Observable<MessageResponseDto>
}