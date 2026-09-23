import { Component, computed, Signal, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { VNavBarComponent } from '../presentation/component/vnavbar.component';
import { LoginOverlayFormComponent } from "../presentation/component/login-overlay-form/login-overlay-form.component";
import { ToastNotificationComponent } from '../presentation/component/toast-notification/toast-notification.component';
import { ToastService } from '../presentation/services/toast-service';
import { SessionUC } from '../domain/use-cases/session-usecase';
import { LoginAuthService } from '../data/services/login-auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, VNavBarComponent, LoginOverlayFormComponent, ToastNotificationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isLoginVisible = false;
  isActive : Signal<boolean> = computed(() => this.toastService.toastParams().outgoing);
  message : Signal<string | null> = computed(() => this.toastService.toastParams().message);
  ongoingMessage : Signal<boolean> = computed(() => this.toastService.toastParams().outgoing);

  private loginAuthService = inject(LoginAuthService);

  constructor(private toastService : ToastService, private sessionUC : SessionUC){}


  ngOnInit(): void {
    if(this.ongoingMessage() != true){
      this.sessionUC.me().subscribe({
        next : () => {
          console.log("APP ME SUCCESS");
          this.loginAuthService.setAuthenticated(true);
        },
        error : () => {console.log("APP ME ERROR");}
      });
    }
  }

  onLoginToggle(value: boolean) {
    this.isLoginVisible = value;
  }
  
}
