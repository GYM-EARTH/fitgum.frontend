import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersShowComponent } from './trainers-show.component';

describe('TrainersShowComponent', () => {
  let component: TrainersShowComponent;
  let fixture: ComponentFixture<TrainersShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainersShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainersShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
