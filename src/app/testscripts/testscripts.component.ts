import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testscripts',
  templateUrl: './testscripts.component.html',
  styleUrls: ['./testscripts.component.css']
})
export class TestscriptsComponent implements OnInit {

  @Input() selectedFeature: string;

  @Input() selectedMode: string;

  constructor() { }

  ngOnInit() {
  }

}
