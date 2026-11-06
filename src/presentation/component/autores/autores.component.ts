import { Component, inject, OnDestroy } from '@angular/core';
import { AutorUC } from '../../../domain/use-cases/autor-usecase';
import { Autor } from '../../../domain/entities/autor';
import { ShowDetailService } from '../../services/show-details-service';
import { ItemCardComponent } from '../itemCard.compo';
import { CommonModule } from '@angular/common';
import { FiltersBarComponent } from '../filters-bar/filters-bar.component';

@Component({
  selector: 'app-autores',
  standalone: true,
  imports: [CommonModule, ItemCardComponent, FiltersBarComponent],
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css', '../../style/option_common.css']
})
export class AutoresComponent implements OnDestroy{
  autores : Array<Autor> = new Array<Autor>;
  private allAutores : Array<Autor> = new Array<Autor>;
  alphabet: string[] = Array.from(
    { length: 26 },
    (_, i) => String.fromCharCode(65 + i));
  filterParam : string | null = "todos"
  isModifierOn : boolean = false
  nacionalidades : string[] | null = null
  private autorUC = inject(AutorUC)
  private showDetailService = inject(ShowDetailService)

  ngOnInit(): void {
    this.autorUC.getAll().subscribe({
      next: resp => {
        this.allAutores = resp.map((a : any) =>
          new Autor(
            a.idAutor,
            a.nombre,
            a.apellido,
            a.fechaNac,
            a.nacionalidad,
            a.breveBio,
            a.fechaDeceso,
            a.imagenUrl)
        )
        this.filterAutoresByParam("todos")
        this.nacionalidades = this.allAutores.map(a => a.getNacionalidad())
      },
      error: err => {
        console.error('Error:', err);
      }
    });
  }

  filterAutoresByParam(p : string | null) : void{
    this.filterParam = p == null ? null : p
    this.isModifierOn = false
    this.applyFilter()
  }

  private applyFilter() : void{
    this.autores = this.filterParam == null
                    ? [...this.allAutores] 
                    : this.performFilterByOption()
  }

  performFilterByOption(modifier ?: string) : Array<Autor>{
    switch(this.filterParam){
      case "a-z":
        return this.autores.sort((a, b) => a.getNombre().localeCompare(b.getNombre()))
      case "nacionalidad":
        if(modifier !== undefined){
          this.isModifierOn = true
          console.log(modifier)
          this.autores = this.autores.filter(a => a.getNacionalidad() === modifier)
          break
        }
        break
      case "obras":
        break
      default : break
    }
    return [...this.allAutores]
  }

  toggleDetails(autor : Autor){
    this.showDetailService.toggleDetailAutor(autor) 
  }

  ngOnDestroy(): void {
    this.showDetailService.closeDetail()
  }
}
