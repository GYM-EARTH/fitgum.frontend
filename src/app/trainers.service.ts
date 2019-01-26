import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trainers } from './trainers';

@Injectable({
  providedIn: 'root'
})
export class TrainersService {
  
  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get<{data: Trainers[]}>('https://fitgum.ru/api/trainers');
  }

  public getTop() {
    return this.http.get<{data: Trainers[]}>('https://fitgum.ru/api/trainers');
  }

  public getBy(slug: string) {
    return this.http.get<{Trainers}>(`https://fitgum.ru/api/trainers/${slug}`);
  }
}
