import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubsShowComponent } from './clubs-show.component';

describe('ClubsShowComponent', () => {
  let component: ClubsShowComponent;
  let fixture: ComponentFixture<ClubsShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubsShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
