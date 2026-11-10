import { Injectable } from "@angular/core";
import { BookmarkService } from "../../data/services/bookmark.service";
import { map, Observable } from "rxjs";
import { MessageResponseDto } from "../../data/dto/message-response-dto";
import { Libro } from "../entities/libro";
import { Autor } from "../entities/autor";
import { Editorial } from "../entities/editorial";

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

    getFavLibroByUsuario() : Observable<Libro[]>{
        const path = 'LibroBookmark/getAllByUsuario';
        return this.bookmarkService.getAllByUser<Libro[]>(path).pipe(
            map(libro =>
                    libro.map((l : any) =>
                        new Libro(
                            l.idLibro,
                            l.titulo,
                            l.idioma,
                            l.anioOrgPub,
                            l.idEditorial,
                            l.sinopsis,
                            l.imagenUrl,
                            l.anioPub,
                            l.categoria
                        )
                    )
            )
        )
    }

    getFavAutorByUsuario() : Observable<Autor[]>{
        const path = 'AutorBookmark/getAllByUsuario';
        return this.bookmarkService.getAllByUser<Autor[]>(path).pipe(
            map(autores =>
                autores.map((a : any) => 
                    new Autor(
                        a.idAutor,
                        a.nombre,
                        a.apellido,
                        a.fechaNac,
                        a.nacionalidad,
                        a.breveBio,
                        a.fechaDeceso,
                        a.imagenUrl
                    )
                )
            )
        )
    }

    getFavEditorialByUsuario() : Observable<Editorial[]>{
        const path = 'EditorialBookmark/getAllByUsuario';
        return this.bookmarkService.getAllByUser<Editorial[]>(path).pipe(
            map(editoriales =>
                    editoriales.map((e : any) =>
                        new Editorial(
                            e.idEditorial,
                            e.nombre,
                            e.paisOrigen,
                            e.sitioWeb,
                            e.imagenUrl
                        )
                    )
            )
        )
    }
}