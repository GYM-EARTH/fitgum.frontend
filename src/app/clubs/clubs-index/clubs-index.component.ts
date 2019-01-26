import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clubs-index',
  templateUrl: './clubs-index.component.html',
  styleUrls: ['./clubs-index.component.css']
})
export class ClubsIndexComponent implements OnInit {

  @Input() club;

  constructor() { }

  ngOnInit() {
  }

}
