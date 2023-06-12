import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestablecomponentsDetailComponent } from './testablecomponents-detail.component';

describe('TestablecomponentsDetailComponent', () => {
  let component: TestablecomponentsDetailComponent;
  let fixture: ComponentFixture<TestablecomponentsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestablecomponentsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestablecomponentsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
