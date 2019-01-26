import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trainers-index',
  templateUrl: './trainers-index.component.html',
  styleUrls: ['./trainers-index.component.css']
})
export class TrainersIndexComponent implements OnInit {

  @Input() trainer;

  constructor() { }

  ngOnInit() {
  }

}
