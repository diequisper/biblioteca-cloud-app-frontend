import { inject, Injectable } from '@angular/core';
import { EditorialInterface } from '../../domain/repositories/editorial-interface';
import { Observable } from 'rxjs';
import { Editorial } from '../../domain/entities/editorial';
import { BibBackendUtil } from '../sources/remote/utilities/bib-back.util';

@Injectable({
  providedIn: 'root'
})
export class EditorialService implements EditorialInterface{

  private bibBackUtil = inject(BibBackendUtil)

  getAll(complementPath: string): Observable<Editorial[]> {
    return this.bibBackUtil.get(complementPath);
  }
}
