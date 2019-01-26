import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trainers-list',
  templateUrl: './trainers-list.component.html',
  styleUrls: ['./trainers-list.component.css']
})
export class TrainersListComponent implements OnInit {
  
  @Input() trainers;
  
  constructor() { }

  ngOnInit() {
  }

}
