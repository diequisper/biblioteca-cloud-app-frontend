import { inject, Injectable } from '@angular/core';
import { BibBackendUtil } from '../sources/remote/utilities/bib-back.util';
import { Observable } from 'rxjs';
import { MessageResponseDto } from '../dto/message-response-dto';
import { BookmarkInterface } from '../../domain/repositories/bookmark-interface';
import { Autor } from '../../domain/entities/autor';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService implements BookmarkInterface {

  private bibBackUtil = inject(BibBackendUtil);

  createBookmark(complementPath : string, genId : number | undefined, paramName : string) : Observable<MessageResponseDto>{
    return this.bibBackUtil.postBookmark(complementPath, genId, paramName)
  }

  getAllByUser<T>(complementPath: string): Observable<T> {
    return this.bibBackUtil.getAllByUser(complementPath)
  }
}
