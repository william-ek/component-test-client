import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestscriptsItemComponent } from './testscripts-item.component';

describe('TestscriptsItemComponent', () => {
  let component: TestscriptsItemComponent;
  let fixture: ComponentFixture<TestscriptsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestscriptsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestscriptsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
