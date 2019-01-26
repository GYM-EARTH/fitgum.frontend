import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clubs-list',
  templateUrl: './clubs-list.component.html',
  styleUrls: ['./clubs-list.component.css']
})
export class ClubsListComponent implements OnInit {

  @Input() clubs;


  constructor() { }

  ngOnInit() {
    
    
  }

}
