import { Component, inject, Input } from '@angular/core';
import { Libro } from '../../../domain/entities/libro';
import { GetAllLibroUC } from '../../../domain/use-cases/libro-usecase';
import { take } from 'rxjs';
import { ItemCardComponent } from '../itemCard.compo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [CommonModule, ItemCardComponent],
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css', '../../style/option_common.css']
})
export class LibrosComponent {
  @Input() secTitle !: string;

  libros : Array<Libro> = new Array<Libro>;
  private getAllLibroUC = inject(GetAllLibroUC)

  ngOnInit(): void {
    this.getAllLibroUC.execute().subscribe({
      next: resp => {
      this.libros = resp.map((x: any) => 
        new Libro(
          x.idLibro,
          x.titulo,
          x.idioma,
          x.idAutor,
          x.anioOrgPub,
          x.idEditorial,
          x.sinopsis,
          x.imagenUrl,
          x.anioPub,
          x.categoria
        ))},
      error: err => {
        console.error('Error:', err);
      }
    });
  }
}
