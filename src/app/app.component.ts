import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MangaListComponent } from './manga-list/manga-list.component';
import { HeaderComponent } from './header/header.component';
import { DetailMangaComponent } from './detail-manga/detail-manga.component';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MangaListComponent, HeaderComponent, DetailMangaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mangatheque';
  selectedManga: any;


  onSelected(manga: any) {
    this.selectedManga = manga;
  }
}

