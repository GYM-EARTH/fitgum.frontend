import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClubsService } from '../../clubs.service';

@Component({
  selector: 'app-clubs-show',
  templateUrl: './clubs-show.component.html',
  styleUrls: ['./clubs-show.component.css']
})
export class ClubsShowComponent implements OnInit {

  public club;
  
  constructor(
    private clubsService: ClubsService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.clubsService.getBy(params['id']).subscribe(clubs => {
        this.club = clubs;
      });
    });
  }

}
