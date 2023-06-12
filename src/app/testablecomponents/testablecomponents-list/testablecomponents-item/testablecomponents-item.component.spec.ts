import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestablecomponentsItemComponent } from './testablecomponents-item.component';

describe('TestablecomponentsItemComponent', () => {
  let component: TestablecomponentsItemComponent;
  let fixture: ComponentFixture<TestablecomponentsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestablecomponentsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestablecomponentsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
