import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MangaService } from '../manga.service';
import { Manga } from '../manga';

@Component({
  selector: 'app-manga-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './manga-list.component.html',
  styleUrls: ['./manga-list.component.css']
})
export class MangaListComponent implements OnInit {
  mangas: Manga[] = [];

  constructor(private mangaService: MangaService) { }

  ngOnInit(): void {
    this.mangaService.getMangas().subscribe(data => {
      console.log('Data received from API:', data);
      this.mangas = data;
    }, error => {
      console.error('There was an error!', error);
    });
  }
}
