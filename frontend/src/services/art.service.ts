import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Art } from 'src/models/art.model';
import { MessageService } from './message.service';






@Injectable({ providedIn: 'root' })
export class ArtService {

  private artUrl = 'http://localhost:8000/api/';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET arts from the server */
  getArts(): Observable<Art[]> {
    return this.http.get<Art[]>(this.artUrl)
      .pipe(
        tap(_ => this.log('fetched arts')),
        catchError(this.handleError<Art[]>('getArts', []))
      );
  }

  /** GET art by id. Will 404 if id not found */
  getArt(id: number): Observable<Art> {
    const url = `${this.artUrl}/${id}`;
    return this.http.get<Art>(url).pipe(
      tap(_ => this.log(`fetched art id=${id}`)),
      catchError(this.handleError<Art>(`getArt id=${id}`))
    );
  }

    /* GET arts whose name contains search term */
    searchArt(term: string): Observable<Art[]> {
      if (!term.trim()) {
        // if not search term, return empty art array.
        return of([]);
      }
      return this.http.get<Art[]>(`${this.artUrl}/?slug=${term}`).pipe(
        tap(x => x.length ?
           this.log(`found arts matching "${term}"`) :
           this.log(`no arts matching "${term}"`)),
        catchError(this.handleError<Art[]>('searchArt', []))
      );
    }
  

  //////// Save methods /////////

  /** POST: add a new art to the server */
  addArt(art: Art): Observable<Art> {
    return this.http.post<Art>(this.artUrl, art, this.httpOptions).pipe(
      tap((newArt: Art) => this.log(`added art w/ id=${newArt.id}`)),
      catchError(this.handleError<Art>('addArt'))
    );
  }

  /** DELETE: delete the art from the server */
  deleteArt(id: number): Observable<Art> {
    const url = `${this.artUrl}/${id}`;

    return this.http.delete<Art>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted art id=${id}`)),
      catchError(this.handleError<Art>('deleteArt'))
    );
  }

  /** PUT: update the art on the server */
  updateArt(art: Art): Observable<any> {
    return this.http.put(this.artUrl, art, this.httpOptions).pipe(
      tap(_ => this.log(`updated art id=${art.id}`)),
      catchError(this.handleError<any>('updateArt'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a ArtService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ArtService: ${message}`);
  }
}