import { CommonModule } from "@angular/common";
import { Component, ElementRef, HostListener, ViewChild } from "@angular/core";

@Component({
  selector : "app-vnavbar",
  standalone : true,
  imports : [CommonModule],
  templateUrl : "../view/vnavbar.component.html"
})
export class VNavBarComponent{

  vpHeight : number = 0;
  @ViewChild('vnavbar') vNavBar !: ElementRef<HTMLDivElement>;

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