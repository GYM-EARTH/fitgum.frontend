import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubsIndexComponent } from './clubs-index.component';

describe('ClubsIndexComponent', () => {
  let component: ClubsIndexComponent;
  let fixture: ComponentFixture<ClubsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
