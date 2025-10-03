import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { VNavBarComponent } from '../presentation/component/vnavbar.component';
import { ContentContainer } from '../presentation/component/contentContainer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, VNavBarComponent, ContentContainer],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  secTitle : string = 'Mis Favoritos';
}
