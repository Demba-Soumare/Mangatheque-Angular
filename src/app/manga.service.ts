import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Manga } from './manga';

@Injectable({
  providedIn: 'root'
})
export class MangaService {
  private apiUrl = 'http://localhost:8000/api.php';

  constructor(private http: HttpClient) { }

  getMangas(): Observable<Manga[]> {
    return this.http.get<Manga[]>(this.apiUrl);
  }

  getMangaById(id: number): Observable<Manga> {
    const url = `${this.apiUrl}?id=${id}`;
    console.log(id);

    return this.http.get<Manga>(url);
  }
}

