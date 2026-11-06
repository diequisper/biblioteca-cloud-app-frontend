import { inject, Injectable } from '@angular/core';
import { libroInterface } from '../../domain/repositories/libro-interface';
import { Libro } from '../../domain/entities/libro';
import { Observable } from 'rxjs';
import { BibBackendUtil } from '../sources/remote/utilities/bib-back.util';
import { MessageObjectDto } from '../dto/message-object-dto';

@Injectable({
  providedIn: 'root'
})
export class LibroService implements libroInterface {

  private bibBackUtil = inject(BibBackendUtil);
    
  getAllLibro(complementPath : string): Observable<Array<Libro>> {
    return this.bibBackUtil.get(complementPath);
  }
  
  getAllByEditorial(complementPath: string, editorialId: number): Observable<MessageObjectDto<Libro[]>> {
    return this.bibBackUtil.getLibrosByEditorial(complementPath, editorialId)
  }

  getAllCategoria(complementPath: string): Observable<MessageObjectDto<string[]>> {
    return this.bibBackUtil.getAllGenre(complementPath)
  }
}
