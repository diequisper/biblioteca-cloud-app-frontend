import { Injectable, signal } from "@angular/core";
import { Libro } from "../../domain/entities/libro";
import { Autor } from "../../domain/entities/autor";

@Injectable({
    providedIn : "root"
})
export class ShowDetailService {
    detailToggle = signal<boolean>(false)
    libroSelected = signal<Libro | null>(null)
    autores = signal<Autor[] | null>(null)

    toggleDetail(libro : Libro, autores : Autor[] | null){
        this.libroSelected.set(libro)
        this.autores.set(autores)
        this.detailToggle.set(true)
    }

    closeDetail() {
        this.detailToggle.set(false);
    }
}