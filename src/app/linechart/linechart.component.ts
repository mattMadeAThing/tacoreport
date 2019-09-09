/*  This component will display the graph for the sensor selected via sidebar or
AGM marker(google map pin).  Good holy hotmess I can't wait to use our api instead of random placeholder stuff
*/
import { DataService } from '../data.service';

import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { MatDialog } from '@angular/material/dialog';
import { Color, Label } from 'ng2-charts';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { Sensor } from '../tacosensors';


@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {
  @Input() sensorSpecific: Sensor;
  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {responsive: true, annotation:true };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = false;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor(private dataSvc: DataService, public dialog: MatDialog) {
  }

  ngOnInit() {
   this.dataSvc.devOnlyGetMockLineData().subscribe(data => {
    console.log(data);
    this.lineChartData[0].data = data;
  });

}
openDialog(): void{
  const dialogRef = this.dialog.open(LinechartComponent, {
    width: '400px',
  })
}


}
