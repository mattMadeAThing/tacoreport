import { Component, OnInit, Host, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import { Sensor, SensorList } from 'src/tacosensors';
import { DataService } from '../data.service';
@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {
  livePlots: number[];

  margin = {top: 50, right: 50, bottom: 50, left: 50};
  width = window.innerWidth - this.margin.left - this.margin.right;
  height = window.innerHeight - this.margin.top - this.margin.bottom;
  constructor(private dataSvc: DataService, @Host() private host: ElementRef<HTMLElement>) { }
  @ViewChild('svg',{static: true}) svgRef: ElementRef<SVGElement>;
  ngOnInit() {
  }

  getChartData(selectedSensor?: Sensor) {
    this.dataSvc.devOnlyGetMockLineData(selectedSensor).subscribe(
      data => this.livePlots = data.properties.temperature.values
      //console.log(data.properties.temperature.values))
    )
    console.log(this.livePlots);
    return this.livePlots;
  }

  chartSetup(){
    const data = [this.getChartData()];
    const { width } = this.host.nativeElement.getBoundingClientRect();
    console.log( width );
    const height = width / (16/9);
    const margin = Math.min(Math.max(width * 0.1, 20), 50);

    const svg = d3.select(this.svgRef.nativeElement)
  }

  onSensorClickGenChart() {

  }

}
