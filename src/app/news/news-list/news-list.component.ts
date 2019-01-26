import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../../news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  @Input() news;

  constructor() { }

  ngOnInit() {

  }

}
