import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainersService } from '../../trainers.service';


@Component({
  selector: 'app-trainers-show',
  templateUrl: './trainers-show.component.html',
  styleUrls: ['./trainers-show.component.css']
})
export class TrainersShowComponent implements OnInit {

  public trainer;
  
  constructor(
    private trainersService: TrainersService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.trainersService.getBy(params['id']).subscribe(trainers => {
        this.trainer = trainers;
      });
    });
  }
}
