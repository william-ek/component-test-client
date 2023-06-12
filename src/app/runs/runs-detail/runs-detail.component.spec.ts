import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunsDetailComponent } from './runs-detail.component';

describe('RunsDetailComponent', () => {
  let component: RunsDetailComponent;
  let fixture: ComponentFixture<RunsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
