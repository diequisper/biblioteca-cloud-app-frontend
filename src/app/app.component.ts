import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { VNavBarComponent } from '../presentation/component/vnavbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, VNavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  secTitle : string = 'Mis Favoritos';

  constructor(router: Router) {
    router.events.subscribe(event => {
      console.log(event);
    });
  }
}
