import { Observable } from "rxjs";
import { Libro } from "../entities/libro";
import { MessageObjectDto } from "../../data/dto/message-object-dto";

export interface libroInterface {
  getAllLibro(model : string) : Observable<Array<Libro>>
  getAllByEditorial(complementPath : string, editorialId : number) : Observable<MessageObjectDto<Libro[]>>
  getAllCategoria(complementPath : string) : Observable<MessageObjectDto<string[]>>
}