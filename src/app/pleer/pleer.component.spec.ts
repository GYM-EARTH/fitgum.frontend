import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PleerComponent } from './pleer.component';

describe('PleerComponent', () => {
  let component: PleerComponent;
  let fixture: ComponentFixture<PleerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PleerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PleerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
