import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClubsService } from '../../clubs.service';
import { TrainersService } from '../../trainers.service';

@Component({
  selector: 'app-clubs-show',
  templateUrl: './clubs-show.component.html',
  styleUrls: ['./clubs-show.component.css']
})
export class ClubsShowComponent implements OnInit {

  public club;
  public trainers;
  
  constructor(
    private clubsService: ClubsService,
    private trainersService: TrainersService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.clubsService.getBy(params['id']).subscribe(clubs => {
        this.club = clubs;
        console.log(this.club);
      });
    });

    this.trainersService.getAll().subscribe(trainers => this.trainers = trainers.data);

  }

}
