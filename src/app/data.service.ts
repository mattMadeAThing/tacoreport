import { Injectable } from '@angular/core';
import { SensorList, MapCenter } from 'src/tacosensors';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // This datasource will be replaced with the tacosource API very soon.
  // While working on the UI/UX prototype stage, will just use hardcoded arrays.
  // Still working with partner to decide whether a more robust(but time consuming)
  // observable based data source is optimal
  private truckSensors: SensorList;
  private mapCenter: MapCenter;

  constructor() {
    this.mapCenter = {
      lat: 39.7392,
      lng: -104.9903
    };

    this.truckSensors = [
      {
        lat: 39.757140,
        lng: -104.975000,
        id: 'Denver Taco Truck',
      },
      {
        lat: 39.720950,
        lng: -104.987500,
        id: 'La Loteria Taco Truck',
      },
      {
        lat: 39.727800,
        lng: -105.025520,
        id: 'La Loteria Taco Truck',
      }
    ];
    }

  getTacoPlots() {
    return this.truckSensors;
  }

  getMapCenter() {
    return this.mapCenter;
  }
}
