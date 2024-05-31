import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MangaService } from '../manga.service';
import { Manga } from '../manga';
import { RouterModule, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-manga-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule,RouterLink],
  providers: [Router],
  templateUrl: './manga-list.component.html',
  styleUrls: ['./manga-list.component.css']
})
export class MangaListComponent implements OnInit {
  mangas: Manga[] = [];

  constructor(private mangaService: MangaService,private router: Router) { }

  ngOnInit(): void {
    this.mangaService.getMangas().subscribe(data => {
      console.log('Data received from API:', data);
      this.mangas = data;
    }, error => {
      console.error('There was an error!', error);
    });
  }


  selectManga(manga: Manga): void {
    this.router.navigate(['/manga', manga.idmanga]);
  }
}
