import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { ClubsService } from '../clubs.service';
import { TrainersService } from '../trainers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public topNews;
  public topClubs;
  public topTrainers;

  constructor(
    private newsService: NewsService,
    private clubsService: ClubsService,
    private trainersService: TrainersService) { }

  ngOnInit() {
    this.newsService.getTop().subscribe(news => this.topNews = news.data);
    this.clubsService.getTop().subscribe(clubs => this.topClubs = clubs.data);
    this.trainersService.getTop().subscribe(trainers => this.topTrainers = trainers.data);
  }

}
