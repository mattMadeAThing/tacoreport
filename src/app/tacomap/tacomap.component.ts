import { Component, OnInit, Input, Output } from '@angular/core';
import { SensorList, MapCenter, Sensor } from 'src/tacosensors';
import { NgIf } from '@angular/common';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-tacomap',
  templateUrl: './tacomap.component.html',
  styleUrls: ['./tacomap.component.css']
})
export class TacomapComponent implements OnInit {
  @Input() tacoPlots: SensorList;
  @Input() mapCenter: MapCenter;
  // This is a value from 0-1 that specifies the opacity of the marker. Will default to .5 and be increased
  // when hovered over from the sidebar component
  @Input() activeMarker: number;
  markerOpacity: number;
  // This value fires an event to show selection
  @Output() markerSelected = new EventEmitter();
  constructor() {
    this.markerOpacity = .5;
   }

  ngOnInit() {
    console.log(this.mapCenter.lat)
  }

  pointSelect() {

  }
}
