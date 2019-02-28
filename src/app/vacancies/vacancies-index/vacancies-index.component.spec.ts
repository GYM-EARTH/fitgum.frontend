import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacanciesIndexComponent } from './vacancies-index.component';

describe('VacanciesIndexComponent', () => {
  let component: VacanciesIndexComponent;
  let fixture: ComponentFixture<VacanciesIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacanciesIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacanciesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
