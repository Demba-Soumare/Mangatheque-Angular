import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MangaService } from '../manga.service';
import { Manga } from '../manga';

@Component({
  selector: 'app-detail-manga',
  templateUrl: './detail-manga.component.html',
  styleUrls: ['./detail-manga.component.css']
})
export class DetailMangaComponent implements OnInit {
  manga: Manga | undefined;

  constructor(private route: ActivatedRoute, private mangaService: MangaService) { }

  ngOnInit(): void {
    console.log('DetailMangaComponent.ngOnInit() called');
    let id = this.route.snapshot.paramMap.get('id');
    console.log('id:', id);
    if (id) {
      this.mangaService.getMangaById(+id).subscribe(
        data => {
          this.manga = data;
        },
        error => {
          console.error('There was an error!', error);
        }
      );
    }
  }
}

