import { inject, Injectable } from '@angular/core';
import { libroInterface } from '../../domain/repositories/libro-interface';
import { Libro } from '../../domain/entities/libro';
import { Observable } from 'rxjs';
import { BibBackendUtil } from '../sources/remote/utilities/bib-back.util';

@Injectable({
  providedIn: 'root'
})
export class LibroService implements libroInterface {

  private bibBackUtil = inject(BibBackendUtil);
    
  getAllLibro(complimentPath : string): Observable<Array<Libro>> {
    return this.bibBackUtil.get(complimentPath);
  }

}
