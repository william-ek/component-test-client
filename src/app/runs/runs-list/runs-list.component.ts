import { Component, OnInit } from '@angular/core';

import { Run } from '../run.model';

@Component({
  selector: 'app-runs-list',
  templateUrl: './runs-list.component.html',
  styleUrls: ['./runs-list.component.css']
})
export class RunsListComponent implements OnInit {

  runs: Run[] = [];

  constructor() { }

  ngOnInit() {
  }

}
