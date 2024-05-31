import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MangaService } from '../manga.service';
import { Manga } from '../manga';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-detail-manga',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './detail-manga.component.html',
  styleUrls: ['./detail-manga.component.css']
})
export class DetailMangaComponent implements OnInit {
  manga: Manga | undefined;

  constructor(private route: ActivatedRoute, private mangaService: MangaService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Route ID:', id);
    if (id) {
      this.mangaService.getMangaById(+id).subscribe(
        data => {
          this.manga = data;
          console.log('Manga:', this.manga); 
        },
        error => {
          console.error('There was an error!', error);
        }
      );
    }
  }
}

