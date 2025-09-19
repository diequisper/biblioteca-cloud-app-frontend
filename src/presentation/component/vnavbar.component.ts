import { CommonModule } from "@angular/common";
import { Component, HostListener } from "@angular/core";

@Component({
  selector : "app-vnavbar",
  standalone : true,
  imports : [CommonModule],
  templateUrl : "../view/vnavbar.component.html"
})
export class VNavBarComponent{
  vpHeight : number = 0;

  ngOnInit() : void{
    if(typeof window !== "undefined"){
      this.vpHeight = window.innerHeight;
    }
  }

  @HostListener('window:resize')
  onHeightResize() : void{
    if(typeof window !== "undefined"){
      this.vpHeight = window.innerHeight;
    }
  }
}