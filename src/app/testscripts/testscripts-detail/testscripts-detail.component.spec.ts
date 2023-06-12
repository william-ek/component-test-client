import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestscriptsDetailComponent } from './testscripts-detail.component';

describe('TestscriptsDetailComponent', () => {
  let component: TestscriptsDetailComponent;
  let fixture: ComponentFixture<TestscriptsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestscriptsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestscriptsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
