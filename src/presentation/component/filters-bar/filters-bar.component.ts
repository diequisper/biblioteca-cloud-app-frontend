import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { GetAllLibroUC } from '../../../domain/use-cases/libro-usecase';

@Component({
  selector: 'app-filters-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filters-bar.component.html',
  styleUrl: './filters-bar.component.css'
})
export class FiltersBarComponent implements OnInit{
  
  @Output() paramSelected = new EventEmitter<string | null>()
  parametros : Array<string> = []
  selectedParam: string | null = null;
  private router : Router = new Router()
  private libroUC = inject(GetAllLibroUC)

  ngOnInit(): void {
    switch (this.router.url) {
      case '/libros':
        this.libroUC.getAllCategoria().subscribe({
          next : (resp : any) => {
            this.parametros = resp.categorias
          }
        })
        break;
      case '/autores':
        this.parametros = ['todos', 'a-z', 'nacionalidad', 'obras']
        break;
      case '/editoriales':
        this.parametros = ['todos', 'a-z', 'pais']
        break;
      default:
        break;
    }
  }

  sendParam(param : string | null){
    this.selectedParam = this.selectedParam === param ? null : param;
    this.paramSelected.emit(this.selectedParam);
  }

}
