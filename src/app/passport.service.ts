import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PassportService {

  constructor(private http: HttpClient) { }

  auth(data) {
    const body = { email: data.email, password: data.password };
    return this.http.post('https://fitgum.ru/api/login', body, httpOptions);
  }
}