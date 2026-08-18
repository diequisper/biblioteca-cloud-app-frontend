import { Component, EventEmitter, Output} from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector : "app-vnavbar",
  standalone : true,
  imports : [RouterLink],
  templateUrl : "../view/vnavbar.component.html"
})
export class VNavBarComponent{
  @Output()
  loginToggle = new EventEmitter<boolean>();

  isLoginVisible = false;

  loginToggleEvent() {
    this.isLoginVisible = !this.isLoginVisible;
    this.loginToggle.emit(this.isLoginVisible);
  }
}