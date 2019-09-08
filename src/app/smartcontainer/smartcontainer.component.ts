import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SensorList, MapCenter } from 'src/tacosensors';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-smartcontainer',
  templateUrl: './smartcontainer.component.html',
  styleUrls: ['./smartcontainer.component.css']
})
export class SmartcontainerComponent implements OnInit, AfterViewInit {
  tacoData: SensorList;
  mapCenter: MapCenter;

  // When the backend is built, will probably have to change data access logic a bit so we can use observables.
  constructor(private dataService: DataService) {
    this.tacoData = dataService.getTacoPlots();
    this.mapCenter = dataService.getMapCenter();
   }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }



}


