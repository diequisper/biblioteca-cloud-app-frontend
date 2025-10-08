import { Observable } from "rxjs";
import { Libro } from "../entities/libro";

export interface libroInterface {
  getAllLibro(model : string) : Observable<Array<Libro>>
}