/*  This component will display the graph for the sensor selected via sidebar or
AGM marker(google map pin).  I am still brand new to the D3 visualizations library so please forgive
how disorganized it may look.  Need some basic functionality to learn/demo then will be optimized.
*/

import { Component, OnInit, Host, ElementRef, ViewChild, OnChanges } from '@angular/core';
import * as d3 from 'd3';
import { Sensor, SensorList } from 'src/tacosensors';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit, OnChanges {
  livePlots: number[];


  constructor(private dataSvc: DataService, @Host() private host: ElementRef<HTMLElement>) { }
  // there are security flaws in using elementRefs. Attempting to find another way.
  @ViewChild('svg',{static: true}) svgRef: ElementRef<SVGElement>;

  ngOnInit() {

  }
  ngOnChanges() {
  }

  getChartData(selectedSensor?: Sensor): Observable<Object> {
    return this.dataSvc.devOnlyGetMockLineData(selectedSensor);
  }
  chartSetup() {
/*
    let margin = {top: 50, right: 50, bottom: 50, left: 50};
    let width = window.innerWidth - margin.left - margin.right;
    let height = window.innerHeight - margin.top - margin.bottom;
    const data = this.getChartData()._subscribe;
    const n = data.l;
    console.log( "n" , n )
    console.log( window.innerWidth, data);


    const svg = d3.select('svg');
    console.log(d3.select('svg'));
    svg
    .attr('viewBox', `0 0 ${width} ${height}`)
    const xScale = d3.scaleLinear()
    .domain([0, n-1])
    .range([0, width]);

    const yScale = d3.scaleLinear()
      .domain([0, maxValue])
      .range([chartHeight, 0]);

    const line = d3.line()
      .defined(d => !isNaN(d.data))
      .x((d, i) => xScale(i))
      .y(d => yScale(d.data))
      .curve(d3.curveMonotoneX)

*/
  }

  onSensorClickGenChart() {

  }

}
