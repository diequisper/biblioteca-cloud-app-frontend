import { Observable } from "rxjs";
import { LibroService } from "../../data/services/libro.service";
import { Libro } from "../entities/libro";
import { Injectable } from "@angular/core";


@Injectable({ providedIn: 'root' })
export class GetAllLibroUC {
  constructor(private libroService: LibroService) {}

  execute(): Observable<Array<Libro>> {
    const path = 'libro/getAll?TableOpt=libro';
    return this.libroService.getAllLibro(path);
  }
}