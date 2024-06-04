import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailMangaComponent } from '../detail-manga/detail-manga.component';
import { DetailMangaService } from '../detail-manga.service';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [DetailMangaComponent],
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
rating: any;
submitRating(arg0: any) {
throw new Error('Method not implemented.');
}
  manga: any;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private detailMangaService: DetailMangaService
  ) {}

  ngOnInit(): void {
    this.getDetailManga();
  }

  getDetailManga(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.detailMangaService.getMangaById(id).subscribe(
      data => this.manga = data,
      error => {
        this.errorMessage = error;
        console.error('Il y a eu une erreur!', error);
      }
    );
  }
}
