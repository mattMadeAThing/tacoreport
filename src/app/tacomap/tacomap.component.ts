import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SensorList, MapCenter, Sensor } from 'src/tacosensors';
import { NgIf } from '@angular/common';
import { emit } from 'cluster';
import { MapsAPILoader, GoogleMapsAPIWrapper } from '@agm/core';


@Component({
  selector: 'app-tacomap',
  templateUrl: './tacomap.component.html',
  styleUrls: ['./tacomap.component.css']
})
export class TacomapComponent implements OnInit {
  @Input() tacoPlots: SensorList;
  @Input() mapCenter: MapCenter;
  @Input() activeMarkerId: Sensor;
  // @Output() markerChanged: EventEmitter;
  // This value fires an event to show selection
  @Output() markerSelect = new EventEmitter<Sensor>();

  constructor() {
    //this.markerOpacity = .5;
  }

  ngOnInit() {
    console.log(this.mapCenter.lat);
  }

  onUpdateMarker(marker: Sensor) {
    console.log(marker.id);
    this.markerSelect.emit(marker);
  }

  // This method is called in the template to make the active maerkers = 1
  // and the inactive markers = .5;
  setOpacity(marker: Sensor) {
    if (marker === this.activeMarkerId) {
      return 1;
    } else {
      return .5;
    }
  }
}
