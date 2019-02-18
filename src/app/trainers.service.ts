import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trainers } from './trainers';

@Injectable({
  providedIn: 'root'
})
export class TrainersService {
  
  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get<{data: Trainers[]}>('https://api.fitgum.ru/trainers');
  }

  public getTop() {
    return this.http.get<{data: Trainers[]}>('https://api.fitgum.ru/trainers');
  }

  public getBy(slug: string) {
    return this.http.get<{Trainers}>(`https://api.fitgum.ru/trainers/${slug}`);
  }
}
