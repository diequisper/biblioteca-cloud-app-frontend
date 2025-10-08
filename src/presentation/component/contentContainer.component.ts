import { CommonModule } from "@angular/common";
import { Component, inject, Input } from "@angular/core";
import { ItemCardComponent } from "./itemCard.compo";
import { Libro } from "../../domain/entities/libro";
import { GetAllLibroUC} from "../../domain/use-cases/libro-usecase";
import { take } from "rxjs";

@Component({
  selector : 'content-container',
  standalone : true,
  imports : [CommonModule, ItemCardComponent],
  templateUrl : '../view/contentContainer.component.html'
})
export class ContentContainer{
  @Input() secTitle !: string;

  libros : Array<Libro> = new Array<Libro>;
  private getAllLibroUC = inject(GetAllLibroUC)

  ngOnInit(): void {
    this.getAllLibroUC.execute().pipe(take(1)).subscribe(resp => {
    this.libros = (resp as any[]).map(l => new Libro(
        l.idLibro,
        l.titulo,
        l.idioma,
        l.idAutor,
        l.anioOrgPub,
        l.idEditorial,
        l.sinopsis,
        l.imagenUrl,
        l.anioPub,
        l.categoria
      ));
    });
  }
}