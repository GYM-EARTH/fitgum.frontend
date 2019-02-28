import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vacancies-index',
  templateUrl: './vacancies-index.component.html',
  styleUrls: ['./vacancies-index.component.css']
})
export class VacanciesIndexComponent implements OnInit {

  @Input() index;

  constructor() { }

  ngOnInit() {
  }

}
