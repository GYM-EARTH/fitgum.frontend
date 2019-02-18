import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clubs } from './clubs';
import { environment } from  '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ClubsService {

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get<{data: Clubs[]}>('https://api.fitgum.ru/clubs');
  }

  public getTop() {
    return this.http.get<{data: Clubs[]}>('https://api.fitgum.ru/clubs');
  }

  public getBy(slug: string) {
    return this.http.get<{Clubs}>(`https://api.fitgum.ru/clubs/${slug}`);
  }
}
