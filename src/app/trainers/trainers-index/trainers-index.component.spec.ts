import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersIndexComponent } from './trainers-index.component';

describe('TrainersIndexComponent', () => {
  let component: TrainersIndexComponent;
  let fixture: ComponentFixture<TrainersIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainersIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainersIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
