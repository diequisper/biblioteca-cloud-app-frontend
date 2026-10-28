import { Component, Input } from "@angular/core";

@Component({
  selector : "item-card",
  standalone : true,
  templateUrl : "../view/itemCard.compo.html",
  styleUrl : "../style/itemCard.css"

})
export class ItemCardComponent{
  @Input() imgUrl !: string | undefined
  @Input() title !: string
  @Input() style : "mini" | "regular" = "regular"
}