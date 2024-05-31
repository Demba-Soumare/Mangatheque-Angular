import { Component } from '@angular/core';
import { Manga } from './manga';
import { CommonModule } from '@angular/common';
import { MangaListComponent } from './manga-list/manga-list.component';
import { HeaderComponent } from './header/header.component';
import { DetailMangaComponent } from './detail-manga/detail-manga.component';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MangaListComponent, HeaderComponent, RouterOutlet, RouterLink,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mangatheque';
  selectedManga: Manga | null = null;


  onSelected(manga: any) {
    this.selectedManga = manga;
  }
}

