import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MangaListComponent } from './manga-list/manga-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MangaListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mangatheque';
}

