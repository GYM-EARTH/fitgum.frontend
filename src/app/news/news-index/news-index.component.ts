import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-index',
  templateUrl: './news-index.component.html',
  styleUrls: ['./news-index.component.css']
})
export class NewsIndexComponent implements OnInit {

  @Input() index;

  constructor() { }

  ngOnInit() {
  }

}
