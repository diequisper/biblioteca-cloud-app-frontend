import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Autor } from '../../../domain/entities/autor';
import { Editorial } from '../../../domain/entities/editorial';
import { Libro } from '../../../domain/entities/libro';
import { BookmarkUC } from '../../../domain/use-cases/bookmark-usecase';
import { ItemCardComponent } from '../itemCard.compo';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule, ItemCardComponent],
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css', '../../style/option_common.css']
})
export class FavoritosComponent implements OnInit{

  favLibros : Libro[] | null = null
  favAutores : Autor[] | null = null
  favEditoriales : Editorial[] | null = null

  private bookmarkUC = inject(BookmarkUC)

  ngOnInit(): void {
    this.bookmarkUC.getFavLibroByUsuario().subscribe({
      next : resp => {
        this.favLibros = resp
      }
    })
    this.bookmarkUC.getFavAutorByUsuario().subscribe({
      next : resp => {
        this.favAutores = resp
      }
    })
    this.bookmarkUC.getFavEditorialByUsuario().subscribe({
      next : resp => {
        this.favEditoriales = resp
      }
    })
  }
}
