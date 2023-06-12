import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationsItemComponent } from './stations-item.component';

describe('StationsItemComponent', () => {
  let component: StationsItemComponent;
  let fixture: ComponentFixture<StationsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
