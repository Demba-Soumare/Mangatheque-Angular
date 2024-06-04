import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DetailMangaService {
  private apiUrl = 'http://localhost:8000/api-detail.php';

  constructor(private http: HttpClient) { }

  getMangaById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?id=${id}`).pipe(
      tap(data => console.log('Response:', data)),
      catchError(this.handleError)
    );
  }

  submitRating(mangaId: number, rating: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${mangaId}/rate`, { rating });
  }


  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Backend returned code ${error.status}, body was: ${JSON.stringify(error.error)}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
