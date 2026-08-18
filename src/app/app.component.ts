import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { VNavBarComponent } from '../presentation/component/vnavbar.component';
import { LoginOverlayFormComponent } from "../presentation/component/login-overlay-form/login-overlay-form.component";
import { ToastNotificationComponent } from '../presentation/component/toast-notification/toast-notification.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, VNavBarComponent, LoginOverlayFormComponent, ToastNotificationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isLoginVisible = false;

  constructor(router: Router) {
    router.events.subscribe(event => {
      console.log(event);
    });
  }

  onLoginToggle(value: boolean) {
    this.isLoginVisible = value;
  }
   

}
