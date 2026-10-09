import { Observable } from "rxjs";
import { MessageResponseDto } from "../../data/dto/message-response-dto";

export interface BookmarkInterface{
    createBookmark(complementPath : string, genId : number | undefined, paramName : string) : Observable<MessageResponseDto>
}