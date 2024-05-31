import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MangaService } from '../manga.service';
import { Manga } from '../manga';
import { Input } from '@angular/core';



@Component({
  selector: 'app-detail-manga',
  standalone: true,
  imports: [CommonModule, HttpClientModule,],

  templateUrl: './detail-manga.component.html',
  styleUrl: './detail-manga.component.css'
})
export class DetailMangaComponent {
  manga?: Manga;
  @Input() Manga: Manga | null = null;

  constructor(private mangaService: MangaService) { }

  ngOnInit() {
    const mangaId = 1;
    this.mangaService.getMangaById(mangaId).subscribe((data: Manga) => {
      this.manga = data;
    });
  }
}


