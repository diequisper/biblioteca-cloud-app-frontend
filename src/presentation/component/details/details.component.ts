import { Component, computed, inject, Signal, OnInit} from '@angular/core';
import { ShowDetailService } from '../../services/show-details-service';
import { ToastService } from '../../services/toast-service';
import { BookmarkUC } from '../../../domain/use-cases/bookmark-usecase';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from '../itemCard.compo';
import { Libro } from '../../../domain/entities/libro';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ItemCardComponent],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css', '../../style/overlay_common.css', '../../style/option_common.css']
})
export class DetailsComponent implements OnInit{

  private detailService = inject(ShowDetailService);
  private toastService = inject(ToastService)
  private bookmarkUC = inject(BookmarkUC)
  private router = inject(Router)
  
  libroSelected = this.detailService.libroSelected
  libroId = computed(() => this.libroSelected()?.getIdLibro)
  cover = computed(() => this.libroSelected()?.getImagenUrl)
  title = computed(() => this.libroSelected()?.getTitulo)
  sinopsis = computed(() => this.libroSelected()?.getSinopsis)
  autores = this.detailService.autores
  autoresNombres = computed(() => this.autores()?.map((a : any) => a.nombre + ' ' + a.apellido).join(", "))

  autorSelected = this.detailService.autorSelected
  autorId = computed(() => this.autorSelected()?.getIdAutor)
  nombreCompleto = computed(() => this.autorSelected()?.getNombre() + " " + this.autorSelected()?.getApellido())
  foto = computed(() => this.autorSelected()?.getImagenUrl())
  bornDied = computed(() => this.autorSelected()?.getFechaNac() + " - " + this.autorSelected()?.getFechaDeceso())
  bio = computed(() => this.autorSelected()?.getBreveBio())

  editorialSelected = this.detailService.editorialSelected
  editorialId = computed(() => this.editorialSelected()?.getIdEditorial)
  nombre = computed(() => this.editorialSelected()?.getNombre)
  pais = computed(() => this.editorialSelected()?.getPaisOrigen)
  logo = computed(() => this.editorialSelected()?.getImagenUrl)
  ejemplaresSignal = this.detailService.ejemplares
  ejemplares = computed(() => this.ejemplaresSignal()?.map(l => new Libro(l.getIdLibro, l.getTitulo, l.getIdioma,
                                                                  l.getAnioOrgPub, l.getIdEditorial, l.getSinopsis,
                                                                  l.getImagenUrl, l.getAnioPub, l.getCategoria)))

  currentRoute : string | null = null 

  private ongoingMessage : Signal<boolean> = computed(() => this.toastService.toastParams().outgoing);
  
  ngOnInit(): void {
    this.currentRoute = this.router.url
  }

  addBookmarkLibro(){
    if(this.ongoingMessage() != true){
      if(this.currentRoute === "/libros"){
        this.bookmarkUC.createLibroBookmark(this.libroId()).subscribe({
          next : resp => {
            this.toastService.pushToastParams(resp.message, 5000)
          },
          error : err => {
            this.toastService.pushToastParams(err.error.message, 5000)
          }
        })
      }
    }
  }

  addBookmarkAutor(){
    if(this.ongoingMessage() != true){
      if(this.currentRoute === "/autores"){
        this.bookmarkUC.createAutorBookmark(this.autorId()).subscribe({
          next : resp => {
            this.toastService.pushToastParams(resp.message, 5000)
          },
          error : err => {
            this.toastService.pushToastParams(err.error.message, 5000)
          }
        })
      }
    }
  }

  addBookmarkEditorial(){
    //idea: abortOngoingMessage
    if(this.ongoingMessage() != true){
      if(this.currentRoute === "/editoriales"){
        this.bookmarkUC.createEditorialBookmark(this.editorialId()).subscribe({
          next : resp => {
            this.toastService.pushToastParams(resp.message, 5000)
          },
          error : err => {
            this.toastService.pushToastParams(err.error.message, 5000)
          }
        })
      }
    }
  }

  close(){
    this.detailService.closeDetail();
  }
}
