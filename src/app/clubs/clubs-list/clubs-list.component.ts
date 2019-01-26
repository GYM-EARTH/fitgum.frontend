import { Component, OnInit } from '@angular/core';
import { ClubsService } from '../../clubs.service';

@Component({
  selector: 'app-clubs-list',
  templateUrl: './clubs-list.component.html',
  styleUrls: ['./clubs-list.component.css']
})
export class ClubsListComponent implements OnInit {

  public clubs;

  constructor(private clubsService: ClubsService) { }

  ngOnInit() {
    this.clubsService.getAll().subscribe(clubs => this.clubs = clubs.data);
    
  }

}
