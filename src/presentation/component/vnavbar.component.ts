import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from "@angular/core";

@Component({
  selector : "app-vnavbar",
  standalone : true,
  templateUrl : "../view/vnavbar.component.html"
})
export class VNavBarComponent implements AfterViewInit{

  vpHeight : number = 0;
  @ViewChild('vnavbar') vNavBar !: ElementRef<HTMLDivElement>;
  @ViewChild('optLibs') optLibs !: ElementRef<HTMLImageElement>;

  ngOnInit() : void{
    if(typeof window !== "undefined"){
      this.vpHeight = window.innerHeight;
    }
  }

  ngAfterViewInit(): void {
    this.optLibs.nativeElement.addEventListener('click', () => {
      
    });
  }


  @HostListener('window:resize')
  onHeightResize() : void{
    if(typeof window !== "undefined"){
      this.vpHeight = window.innerHeight;
    }
  }

}