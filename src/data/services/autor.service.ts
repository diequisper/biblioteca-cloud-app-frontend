import { inject, Injectable } from '@angular/core';
import { BibBackendUtil } from '../sources/remote/utilities/bib-back.util';
import { AutorInterface } from '../../domain/repositories/autor-interface';
import { Observable } from 'rxjs';
import { Autor } from '../../domain/entities/autor';
import { MessageObjectDto } from '../dto/message-object-dto';

@Injectable({
  providedIn: 'root'
})
export class AutorService implements AutorInterface {
  
  private bibBackUtil = inject(BibBackendUtil)

  getAutorByBookId(complementPath: string, idLibro: number): Observable<MessageObjectDto<Autor[]>> {
    return this.bibBackUtil.getAutorByBookId(complementPath, idLibro)
  }

  getAll(complementPath: string): Observable<Array<Autor>> {
    return this.bibBackUtil.get(complementPath)
  }

}
