import { Component, OnInit } from '@angular/core';
import { VacanciesService } from '../vacancies.service';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {

  public vacancies;

  constructor(private vacanciesService: VacanciesService) { }

  ngOnInit() {
    this.vacanciesService.getAll().subscribe(vacancies => this.vacancies = vacancies.data);
  }

}
