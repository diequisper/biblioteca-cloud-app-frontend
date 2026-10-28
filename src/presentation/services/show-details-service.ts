import { Injectable, signal } from "@angular/core";
import { Libro } from "../../domain/entities/libro";
import { Autor } from "../../domain/entities/autor";
import { Editorial } from "../../domain/entities/editorial";

@Injectable({
    providedIn : "root"
})
export class ShowDetailService {
    detailToggle = signal<boolean>(false)
    libroSelected = signal<Libro | null>(null)
    autores = signal<Autor[] | null>(null)
    autorSelected = signal<Autor | null>(null)
    editorialSelected = signal<Editorial | null>(null)
    ejemplares = signal<Libro[] | null>(null)

    toggleDetailLibro(libro : Libro, autores : Autor[] | null){
        this.libroSelected.set(libro)
        this.autores.set(autores)
        this.detailToggle.set(true)
    }

    toggleDetailAutor(autor : Autor){
        this.autorSelected.set(autor)
        this.detailToggle.set(true)
    }

    toggleDetailEditorial(editorial : Editorial, ejemplares : Libro[] | null){
        this.editorialSelected.set(editorial)
        this.ejemplares.set(ejemplares)
        this.detailToggle.set(true)
    }

    closeDetail() {
        this.detailToggle.set(false);
    }
}