import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { ClubsService } from '../clubs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public topNews;
  public topClubs;

  constructor(
    private newsService: NewsService,
    private clubsService: ClubsService) { }

  ngOnInit() {
    this.newsService.getTop().subscribe(news => this.topNews = news.data);
    this.clubsService.getTop().subscribe(clubs => this.topClubs = clubs.data);
  }

}
