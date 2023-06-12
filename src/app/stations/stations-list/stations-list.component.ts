import { Component, OnInit } from '@angular/core';
import { Station } from '../station.model'

@Component({
  selector: 'app-stations-list',
  templateUrl: './stations-list.component.html',
  styleUrls: ['./stations-list.component.css']
})
export class StationsListComponent implements OnInit {

  stations: Station[] = [
    new Station("rrji-6622-0944-lxti", "osinstance1.zoox.com", "Check-in Station", "1.0.0", "1", "Galaxy 10 Tablet", true, true, true),
    new Station("6678-jjxy-rltx-4509", "osinstance2.zoox.com", "Check-in Station", "1.0.0", "2", "Galaxy 10 Tablet", true, true, true),
    new Station("6678-jjxy-rltx-4509", "osinstance2.zoox.com", "Check-in Station", "1.0.0", "3", "Galaxy 10 Tablet", true, true, true)
  ];


  constructor() { }

  ngOnInit() {
  }

}
