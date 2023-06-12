import { Component, OnInit } from '@angular/core';
import { TestScripts } from '../testscripts.model';

@Component({
  selector: 'app-testscripts-list',
  templateUrl: './testscripts-list.component.html',
  styleUrls: ['./testscripts-list.component.css']
})
export class TestscriptsListComponent implements OnInit {

  tests: TestScripts[] = [
    new TestScripts("1234-acef-xxyu-1896", "camera test accuity", "1.0.0", "camera", "recognition, image", true, true),
    new TestScripts("1234-ff12-xxyu-4752", "camera test resolution", "1.0.0", "camera", "resolution", true, true),
    new TestScripts("7766-1245-67tu-1083", "camera test mechanical", "1.0.0", "camera", "zoom, pan", true, true)
  ];

  constructor() { }

  ngOnInit() {
  }

}
