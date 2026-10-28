import { Observable } from "rxjs";
import { Editorial } from "../entities/editorial";

export interface EditorialInterface{
    getAll(complementPath : string) : Observable<Editorial[]>
}