import { Injectable } from "@angular/core";
import { AutorService } from "../../data/services/autor.service";
import { Observable } from "rxjs";
import { MessageObjectDto } from "../../data/dto/message-object-dto";
import { Autor } from "../entities/autor";

@Injectable({
    providedIn : "root"
})
export class AutorUC{
    constructor(private autorService : AutorService){}

    getAutorByBookId(idLibro : number) : Observable<MessageObjectDto<Autor[]>>{
        const path = "Autor/getAuthorByBook"
        return this.autorService.getAutorByBookId(path, idLibro)
    }

    getAll(): Observable<Array<Autor>> {
        const path = 'libro/getAll?TableOpt=autor'
        return this.autorService.getAll(path)
    }

}