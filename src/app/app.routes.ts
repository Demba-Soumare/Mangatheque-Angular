import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { MangaListComponent } from './manga-list/manga-list.component';
import { DetailMangaComponent } from './detail-manga/detail-manga.component';


export const routes: Routes = [
  { path: '', component: MangaListComponent },
  { path: 'detail-manga/:id', component: DetailMangaComponent },
];

export const appRoutingProviders = [
  provideRouter(routes),
];
