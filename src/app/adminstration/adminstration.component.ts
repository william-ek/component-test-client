import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-adminstration',
  templateUrl: './adminstration.component.html',
  styleUrls: ['./adminstration.component.css']
})
export class AdminstrationComponent implements OnInit {

  @Output() featureSelected = new EventEmitter<string>();
  
  @Output() modeSelected = new EventEmitter<string>();

  selectedFeature: string = "home";

  selectedMode: string = "create";

  constructor(private router: Router) { }

  onFeatureSelected(feature: string) {
    console.log("onFeatureSelected: " + feature);
    this.featureSelected.emit(feature);
    this.selectedFeature = feature;
  }


  onModseSelected(mode: string) {
    console.log("onModseSelected: " + mode);
    this.modeSelected.emit(mode);
    this.selectedMode = mode;
  }

  ngOnInit() {
    console.log("AdminstrationComponent: ngOnInit: selectedFeature: " + this.selectedFeature + " selectedMode: " + this.selectedMode);
  }

}
