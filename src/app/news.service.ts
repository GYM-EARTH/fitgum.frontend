import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from './news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get<{data: News[]}>('https://fitgum.ru/api/news');
  }

  public getTop() {
    return this.http.get<{data: News[]}>('https://fitgum.ru/api/news');
  }

  public getBy(slug: string) {
    return this.http.get<{News}>(`https://fitgum.ru/api/news/${slug}`);
  }

}
