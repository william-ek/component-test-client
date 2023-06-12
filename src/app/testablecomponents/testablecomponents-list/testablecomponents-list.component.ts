import { Component, OnInit, OnDestroy } from '@angular/core';
import { TestableComponent } from '../testablecomponent.model';
import { TestablecomponentsItemComponent } from './testablecomponents-item/testablecomponents-item.component'
import { TestablecomponentsService } from '../testablecomponents.service';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-testablecomponents-list',
  templateUrl: './testablecomponents-list.component.html',
  styleUrls: ['./testablecomponents-list.component.css']
})
export class TestablecomponentsListComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  components: TestableComponent[] = [];

  /*
  components: TestableComponent[] = [
    new TestableComponent("xxx-yyy-fffff-ggg", "2566-ytr-44uyt", "camera", "20180428:06:44:00", "camera test", "1.0.0", true, true),
    new TestableComponent("xxx-yyy-fffff-yyy", "2566-ytr-45uyt", "camera", "20180428:06:48:00", "camera test", "1.0.0", true, true),
    new TestableComponent("1234-acef-xxyu-1896", "12568-yuz-47669", "camera", null, null, null, false, true),
    new TestableComponent("1234-ff12-xxyu-4752", "12568-yuz-47670", "camera", null, null, null, false, true),
    new TestableComponent("7766-1245-67tu-1083", "12568-yuz-47671", "camera", "20180705:06:44:30", "camera test", "1.0.0", true, true)
  ];
  */

  constructor(private componentService: TestablecomponentsService) { }

  getComponents() {
    return this.components;
  }

  setComponents(components: TestableComponent[]) {
    this.components = components;
  }

  ngOnInit() {
    console.log("TestablecomponentsListComponent:ngOnInit")
    this.subscription = this.componentService.componentChanged
    .subscribe(
      (components: TestableComponent[]) => {
        this.components = components;
      }
    );
  this.componentService.refreshComponents();
  }

  ngOnDestroy() {
  }

}
