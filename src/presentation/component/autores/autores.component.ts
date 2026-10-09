import { Component, inject, OnDestroy } from '@angular/core';
import { AutorUC } from '../../../domain/use-cases/autor-usecase';
import { Autor } from '../../../domain/entities/autor';
import { ShowDetailService } from '../../services/show-details-service';
import { ItemCardComponent } from '../itemCard.compo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-autores',
  standalone: true,
  imports: [CommonModule, ItemCardComponent],
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css', '../../style/option_common.css']
})
export class AutoresComponent implements OnDestroy{
  autores : Array<Autor> = new Array<Autor>;
  private autorUC = inject(AutorUC)
  private showDetailService = inject(ShowDetailService)

  ngOnInit(): void {
    this.autorUC.getAll().subscribe({
      next: resp => {
        this.autores = resp.map((a : any) =>
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
      },
      error: err => {
        console.error('Error:', err);
      }
    });
    console.log(this.autores)
  }

  toggleDetails(autor : Autor){
  }

  ngOnDestroy(): void {
    this.showDetailService.closeDetail()
  }
}
