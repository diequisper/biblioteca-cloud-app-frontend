import { Observable } from "rxjs";
import { Autor } from "../entities/autor";
import { MessageObjectDto } from "../../data/dto/message-object-dto";

export interface AutorInterface{
    getAll(complementPath : string) : Observable<Array<Autor>> 
    getAutorByBookId(complementPath : string, idLibro : number) : Observable<MessageObjectDto<Autor[]>>
}