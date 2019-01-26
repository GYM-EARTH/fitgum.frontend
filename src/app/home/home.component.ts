import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public topNews;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getTop().subscribe(news => this.topNews = news.data);
  }

}
