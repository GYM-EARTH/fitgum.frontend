import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlaersComponent } from './flaers.component';

describe('FlaersComponent', () => {
  let component: FlaersComponent;
  let fixture: ComponentFixture<FlaersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlaersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlaersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
