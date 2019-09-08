import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SensorList, Sensor } from 'src/tacosensors';



@Component({
  selector: 'app-sensor-sidebar',
  templateUrl: './sensor-sidebar.component.html',
  styleUrls: ['./sensor-sidebar.component.css']
})
export class SensorSidebarComponent implements OnInit {
  displayedColumns: string[];
  sensor: Sensor;
  @Input() dataSource: SensorList;
      // activeRow is used to indicate which datapoint on in the row is selected.
  @Output() rowSelect = new EventEmitter<Sensor>();
  constructor() {
    this.displayedColumns = ['Truck Name', 'Lat', 'Lng'];
   }

  ngOnInit() {
  }
  enter(row: Sensor) {
    console.log('rowentry' + row.id);
    this.rowSelect.emit(row);
  }
  exit() {
    this.rowSelect.emit(null);
  }
}
