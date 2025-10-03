import { Component, Input } from "@angular/core";

@Component({
  selector : "item-card",
  standalone : true,
  templateUrl : "../view/itemCard.compo.html"

})
export class ItemCardComponent{
  @Input() imgUrl !: string
  @Input() title !: string
}