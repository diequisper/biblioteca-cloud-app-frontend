import { Component, computed, inject, Signal, OnInit} from '@angular/core';
import { ShowDetailService } from '../../services/show-details-service';
import { ToastService } from '../../services/toast-service';
import { BookmarkUC } from '../../../domain/use-cases/bookmark-usecase';
import { Router } from '@angular/router';
import { Autor } from '../../../domain/entities/autor';
import { MessageResponseDto } from '../../../data/dto/message-response-dto';
import { MessageObjectDto } from '../../../data/dto/message-object-dto';
import { AutorUC } from '../../../domain/use-cases/autor-usecase';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css', '../../style/overlay_common.css']
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

  currentRoute : string | null = null 

  private ongoingMessage : Signal<boolean> = computed(() => this.toastService.toastParams().outgoing);
  
  ngOnInit(): void {
    console.log(this.autores())
    this.currentRoute = this.router.url
  }

  addBookmark(){
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

  close(){
    this.detailService.closeDetail();
  }
}
