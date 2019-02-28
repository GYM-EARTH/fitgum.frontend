import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacanciesShowComponent } from './vacancies-show.component';

describe('VacanciesShowComponent', () => {
  let component: VacanciesShowComponent;
  let fixture: ComponentFixture<VacanciesShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacanciesShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacanciesShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
