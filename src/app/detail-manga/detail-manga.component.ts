import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailMangaService } from '../detail-manga.service';

@Component({
  selector: 'app-detail-manga',
  templateUrl: './detail-manga.component.html',
  styleUrls: ['./detail-manga.component.css']
})
export class DetailMangaComponent implements OnInit {
  manga: any;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private detailMangaService: DetailMangaService
  ) { }

  ngOnInit(): void {
    this.getDetailManga();
  }

  getDetailManga(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.detailMangaService.getMangaById(id).subscribe(
      data => this.manga = data,
      error => {
        this.errorMessage = error;
        console.error('There was an error!', error);
      }
    );
  }
}





