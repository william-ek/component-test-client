import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TestableComponent } from '../../testablecomponent.model';

@Component({
  selector: 'app-testablecomponents-item',
  templateUrl: './testablecomponents-item.component.html',
  styleUrls: ['./testablecomponents-item.component.css']
})
export class TestablecomponentsItemComponent implements OnInit {
  
  @Input() testableComponent: TestableComponent;

  constructor() { }

  ngOnInit() {
  }

}
