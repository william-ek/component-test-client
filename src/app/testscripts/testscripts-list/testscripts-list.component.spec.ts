import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestscriptsListComponent } from './testscripts-list.component';

describe('TestscriptsListComponent', () => {
  let component: TestscriptsListComponent;
  let fixture: ComponentFixture<TestscriptsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestscriptsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestscriptsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
