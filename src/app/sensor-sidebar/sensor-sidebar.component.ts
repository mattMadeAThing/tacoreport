import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { SensorList, Sensor } from 'src/tacosensors';



@Component({
  selector: 'app-sensor-sidebar',
  templateUrl: './sensor-sidebar.component.html',
  styleUrls: ['./sensor-sidebar.component.css']
})
export class SensorSidebarComponent implements OnInit {
  displayedColumns: string[];
  @Input() activeSensor: Sensor;
  @Input() dataSource: SensorList;
  @ViewChild(MatPaginator)
      // activeRow is used to indicate which datapoint on in the row is selected.
  @Output() rowSelect: EventEmitter<Sensor> = new EventEmitter<Sensor>();
  constructor() {
    this.displayedColumns = ['Truck Name', 'Lat', 'Lng'];
   }

  ngOnInit() {
  }
  onUpdateActiveRow(row: Sensor) {
    this.rowSelect.emit(row);
  }
  exit() {
    this.rowSelect.emit(null);
  }

  setActiveRowStyling(row: Sensor) {
    if (row === this.activeSensor) {
      return('lightgrey');
    } else {
      return('white');
    }
  }
}
