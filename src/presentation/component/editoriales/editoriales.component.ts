import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ItemCardComponent } from '../itemCard.compo';
import { Editorial } from '../../../domain/entities/editorial';
import { EditorialUC } from '../../../domain/use-cases/editorial-usecase';
import { ShowDetailService } from '../../services/show-details-service';
import { CommonModule } from '@angular/common';
import { GetAllLibroUC } from '../../../domain/use-cases/libro-usecase';
import { Libro } from '../../../domain/entities/libro';

@Component({
  selector: 'app-editoriales',
  standalone: true,
  imports: [CommonModule, ItemCardComponent],
  templateUrl: './editoriales.component.html',
  styleUrls: ['./editoriales.component.css', '../../style/option_common.css']
})
export class EditorialesComponent implements OnInit, OnDestroy{
  
  editoriales : Editorial[] | null = null
  private editorialUC = inject(EditorialUC)
  private libroUC = inject(GetAllLibroUC)
  private showDetailService = inject(ShowDetailService)

  ngOnInit(): void {
    this.editorialUC.getAll().subscribe(
      {
        next : resp => {
          this.editoriales = resp.map((e : any) => 
            new Editorial(
              e.idEditorial,
              e.nombre,
              e.paisOrigen,
              e.sitioWeb,
              e.imagenUrl
            )
          )
        },
        error : () => {}
      }
    )
  }

  toggleDetails(editorial : Editorial){
    this.libroUC.getAllByEditorial(editorial.getIdEditorial).subscribe({
      next : resp => {
        let ejemplares = resp.result.map((x : any) => new Libro(
            x.idLibro,
            x.titulo,
            x.idioma,
            x.anioOrgPub,
            x.idEditorial,
            x.sinopsis,
            x.imagenUrl,
            x.anioPub,
            x.categoria
        ))
        this.showDetailService.toggleDetailEditorial(editorial, ejemplares) 
      }
    })
  }

  ngOnDestroy(): void {
    this.showDetailService.closeDetail()
  }
}
