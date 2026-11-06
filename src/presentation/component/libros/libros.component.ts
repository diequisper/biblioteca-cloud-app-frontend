import { Component, inject, Input } from '@angular/core';
import { Libro } from '../../../domain/entities/libro';
import { GetAllLibroUC } from '../../../domain/use-cases/libro-usecase';
import { ItemCardComponent } from '../itemCard.compo';
import { CommonModule } from '@angular/common';
import { ShowDetailService } from '../../services/show-details-service';
import { OnDestroy } from '@angular/core';
import { AutorUC } from '../../../domain/use-cases/autor-usecase';
import { Autor } from '../../../domain/entities/autor';
import { FiltersBarComponent } from '../filters-bar/filters-bar.component';
@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [CommonModule, ItemCardComponent, FiltersBarComponent],
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css', '../../style/option_common.css']
})
export class LibrosComponent implements OnDestroy{

  @Input() secTitle !: string;  
  private filterParam : string | null = null
  libros : Array<Libro> = new Array<Libro>;
  private allLibros : Array<Libro> = new Array<Libro>;
  private getAllLibroUC = inject(GetAllLibroUC)
  private showDetailService = inject(ShowDetailService)
  private autorUC = inject(AutorUC)

  ngOnInit(): void {
    this.getAllLibroUC.execute().subscribe({
      next: resp => {
        this.allLibros = resp.map((x: any) => 
          new Libro(
            x.idLibro,
            x.titulo,
            x.idioma,
            x.anioOrgPub,
            x.idEditorial,
            x.sinopsis,
            x.imagenUrl,
            x.anioPub,
            x.categoria)
        )
        this.applyFilter()
      },
      error: err => {
        console.error('Error:', err);
      }
    });
  }

  filterLibrosByParam(param: string | null): void {
    this.filterParam =
      this.filterParam === param ? null : param;

    this.applyFilter();
  }

  private applyFilter(): void {
    this.libros = this.filterParam === null
      ? [...this.allLibros]
      : this.allLibros.filter(libro => libro.getCategoria === this.filterParam);
  }
  
  toggleDetails(libro : Libro){
    var autores : Autor[] = []
    this.autorUC.getAutorByBookId(libro.getIdLibro).subscribe({
      next : resp => {
        autores = resp.result
        this.showDetailService.toggleDetailLibro(libro, autores)
      },
      error : err => {
        console.log(err.error.message)  
      }
    })
  }

  ngOnDestroy(): void {
    this.showDetailService.closeDetail()
  }

  
}
