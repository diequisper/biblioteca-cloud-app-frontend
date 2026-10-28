import { Injectable } from "@angular/core";
import { EditorialService } from "../../data/services/editorial.service";
import { Observable } from "rxjs";
import { Editorial } from "../entities/editorial";

@Injectable({providedIn : "root"})
export class EditorialUC{

    constructor(private editorialService : EditorialService){}

    getAll() : Observable<Editorial[]>{
        const path = 'libro/getAll?TableOpt=editorial'
        return this.editorialService.getAll(path)
    }
}