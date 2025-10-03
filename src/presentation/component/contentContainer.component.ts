import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { ItemCardComponent } from "./itemCard.compo";

@Component({
  selector : 'content-container',
  standalone : true,
  imports : [CommonModule, ItemCardComponent],
  templateUrl : '../view/contentContainer.component.html'
})
export class ContentContainer{
  @Input() secTitle !: string;
  imgUrl : string = "https://images.booksense.com/images/272/716/9798736716272.jpg";
  title : string = "The Picture of Dorian Gray";
}