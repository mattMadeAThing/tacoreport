export interface Sensor {
      lat: number;
      lng: number;
      id: string;
}

export interface SensorList extends Array<Sensor> {}

export interface MapCenter {
  lat: number;
  lng: number;
}
