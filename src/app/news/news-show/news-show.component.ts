import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../news.service';

@Component({
  selector: 'app-news-show',
  templateUrl: './news-show.component.html',
  styleUrls: ['./news-show.component.css']
})
export class NewsShowComponent implements OnInit {

  public article;

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.newsService.getBy(params['id']).subscribe(news => {
        this.article = news;
      });
    });
    
  }

}
