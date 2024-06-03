import { TestBed } from '@angular/core/testing';

import { DetailMangaService } from './detail-manga.service';

describe('DetailMangaService', () => {
  let service: DetailMangaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailMangaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
