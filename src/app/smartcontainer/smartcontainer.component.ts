import { Component, OnInit, AfterViewInit, Input, ViewChild, ViewChildren } from '@angular/core';
import { SensorList, MapCenter, Sensor } from 'src/app/tacosensors';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-smartcontainer',
  templateUrl: './smartcontainer.component.html',
  styleUrls: ['./smartcontainer.component.css']
})
// If unneeded at deploy-time, remove unused lifecycle implementation.
export class SmartcontainerComponent implements OnInit, AfterViewInit {
  tacoData: SensorList;
  mapCenter: MapCenter;
  activeMarkerOrRow: Sensor;
  @Input() clickMarkerOrRow: Sensor;
  // When the backend is built, will probably have to change data access logic a bit so we can use observables.
  constructor(private dataService: DataService) {
    this.tacoData = dataService.getTacoPlots();
    this.mapCenter = dataService.getMapCenter();
   }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }
  onClickRowMarker($event){
    console.log($event)
  }

  recieveRowMarkerUpdate($event) {
    if ($event != null) {
    // console.log($event.id + "in container");
    this.activeMarkerOrRow = $event;
    } else {
      //console.log("nullrow");
    }
  }



}


