import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunsItemComponent } from './runs-item.component';

describe('RunsItemComponent', () => {
  let component: RunsItemComponent;
  let fixture: ComponentFixture<RunsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
