import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vacancies-list',
  templateUrl: './vacancies-list.component.html',
  styleUrls: ['./vacancies-list.component.css']
})
export class VacanciesListComponent implements OnInit {

  @Input() vacancies;

  constructor() { }

  ngOnInit() {
  }

}
