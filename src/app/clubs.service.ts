import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clubs } from './clubs';

@Injectable({
  providedIn: 'root'
})
export class ClubsService {

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get<{data: Clubs[]}>('https://fitgum.ru/api/clubs');
  }

  public getTop() {
    return this.http.get<{data: Clubs[]}>('https://fitgum.ru/api/clubs');
  }

  public getBy(slug: string) {
    return this.http.get<{Clubs}>(`https://fitgum.ru/api/clubs/${slug}`);
  }
}