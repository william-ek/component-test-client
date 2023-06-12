import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedFeature: string = "home";

  selectedMode: string = "list";


  title = 'HWSI Test Framework';

  constructor() { }

  onFeatureEvent(feature: string) {
    console.log("onFeatureEvent: " + feature);
    this.selectedFeature = feature;
  }

  onModeEvent(mode: string) {
    console.log("onModeEvent: " + mode);
    this.selectedMode = mode;
  }
}
