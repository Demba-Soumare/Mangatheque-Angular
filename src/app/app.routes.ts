import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MangaListComponent } from './manga-list/manga-list.component';
import { DetailMangaComponent } from './detail-manga/detail-manga.component';


export const routes: Routes = [
  { path: '', component: MangaListComponent },
  { path: 'detail-manga/:id', component: DetailMangaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
