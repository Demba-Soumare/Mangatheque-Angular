import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MangaService } from '../manga.service';
import { Manga } from '../manga';


@Component({
  selector: 'app-manga-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './manga-list.component.html',
  styleUrls: ['./manga-list.component.css'],
})
export class MangaListComponent implements OnInit {
  mangas: Manga[] = [];

  constructor(private mangaService: MangaService) {}

  ngOnInit(): void {
    this.mangaService.getMangas().subscribe(
      (data) => {
        this.mangas = data;
        console.log('Mangas:', this.mangas);
      },
      (error) => {
        console.error('Il y a une erreur!', error);
      }
    );
  }
}
