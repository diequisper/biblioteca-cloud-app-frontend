import { Component, computed, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { VNavBarComponent } from '../presentation/component/vnavbar.component';
import { LoginOverlayFormComponent } from "../presentation/component/login-overlay-form/login-overlay-form.component";
import { ToastNotificationComponent } from '../presentation/component/toast-notification/toast-notification.component';
import { ToastService } from '../presentation/services/toast-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, VNavBarComponent, LoginOverlayFormComponent, ToastNotificationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isLoginVisible = false;
  isActive : Signal<boolean> = computed(() => this.toastService.toastParams().outgoing);
  message : Signal<string | null> = computed(() => this.toastService.toastParams().message);

  constructor(private toastService : ToastService){}

  onLoginToggle(value: boolean) {
    this.isLoginVisible = value;
  }
}
