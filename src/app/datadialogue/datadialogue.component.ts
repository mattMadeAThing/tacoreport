import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LinechartComponent } from './linechart/linechart.component';
import { Sensor } from '../tacosensors';
@Component({
  selector: 'app-datadialogue',
  templateUrl: './datadialogue.component.html',
  styleUrls: ['./datadialogue.component.css']
})
export class DataDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog(selectedSensor?: Sensor): void {
    const dialogRef = this.dialog.open(LinechartComponent, {
      width: '700px',
      height: '400px',
      hasBackdrop: true,

    });

  }
  ngOnInit() {

  }

}
