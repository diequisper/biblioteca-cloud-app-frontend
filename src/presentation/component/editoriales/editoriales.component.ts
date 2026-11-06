import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ItemCardComponent } from '../itemCard.compo';
import { Editorial } from '../../../domain/entities/editorial';
import { EditorialUC } from '../../../domain/use-cases/editorial-usecase';
import { ShowDetailService } from '../../services/show-details-service';
import { CommonModule } from '@angular/common';
import { GetAllLibroUC } from '../../../domain/use-cases/libro-usecase';
import { Libro } from '../../../domain/entities/libro';
import { FiltersBarComponent } from '../filters-bar/filters-bar.component';

@Component({
  selector: 'app-editoriales',
  standalone: true,
  imports: [CommonModule, ItemCardComponent, FiltersBarComponent],
  templateUrl: './editoriales.component.html',
  styleUrls: ['./editoriales.component.css', '../../style/option_common.css']
})
export class EditorialesComponent implements OnInit, OnDestroy{
  
  editoriales : Array<Editorial> = new Array<Editorial>
  private allEditoriales : Array<Editorial> = new Array<Editorial>
  alphabet: string[] = Array.from(
    { length: 26 },
    (_, i) => String.fromCharCode(65 + i));
  filterParam : string | null = "todos"
  isModifierOn : boolean = false
  paises : string[] | null = null

  private editorialUC = inject(EditorialUC)
  private libroUC = inject(GetAllLibroUC)
  private showDetailService = inject(ShowDetailService)

  ngOnInit(): void {
    this.editorialUC.getAll().subscribe(
      {
        next : resp => {
          this.allEditoriales = resp.map((e : any) => 
            new Editorial(
              e.idEditorial,
              e.nombre,
              e.paisOrigen,
              e.sitioWeb,
              e.imagenUrl
            )
          )
          this.filterEditorialesByParam("todos")
          this.paises = this.allEditoriales.map(e => e.getPaisOrigen)
        },
        error : () => {}
      }
    )
  }

  filterEditorialesByParam(p : string | null) : void{
    this.filterParam = p == null ? null : p
    this.isModifierOn = false
    this.applyFilter()
  }

    private applyFilter() : void{
    this.editoriales= this.filterParam == null
                    ? [...this.allEditoriales] 
                    : this.performFilterByOption()
  }

  performFilterByOption(modifier ?: string) : Array<Editorial>{
    switch(this.filterParam){
      case "a-z":
        return this.editoriales.sort((a, b) => a.getNombre.localeCompare(b.getNombre))
      case "pais":
        if(modifier !== undefined){
          this.isModifierOn = true
          console.log(modifier)
          this.editoriales = this.editoriales.filter(e => e.getPaisOrigen === modifier)
          break
        }
        break
      case "obras":
        break
      default : break
    }
    return [...this.allEditoriales]
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
