import { Injectable } from "@angular/core";
import { BookmarkService } from "../../data/services/bookmark.service";
import { Observable } from "rxjs";
import { MessageResponseDto } from "../../data/dto/message-response-dto";

@Injectable({providedIn : "root"})
export class BookmarkUC {

    constructor(private bookmarkService : BookmarkService){}

    createLibroBookmark(libroId : number | undefined) : Observable<MessageResponseDto>{
        const path = 'LibroBookmark/createBookmark';
        return this.bookmarkService.createBookmark(path, libroId, "libroId")
    }

    createAutorBookmark(autorId : number | undefined) : Observable<MessageResponseDto>{
        const path = 'AutorBookmark/createBookmark';
        return this.bookmarkService.createBookmark(path, autorId, "autorId")
    }

    createEditorialBookmark(editorialId : number | undefined) : Observable<MessageResponseDto>{
        const path = 'EditorialBookmark/createBookmark';
        return this.bookmarkService.createBookmark(path, editorialId, "editorialId")
    }
}