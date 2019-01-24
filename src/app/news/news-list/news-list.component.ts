import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  public news;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getAll().subscribe(news => this.news = news.data);
    
  }

}
