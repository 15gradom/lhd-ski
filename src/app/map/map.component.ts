import { Component, AfterViewInit, Input} from '@angular/core';
import * as L from 'leaflet';
import { Measuringpoint } from 'src/shared/measuringpoint';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {

  private map;
  greenIcon = null;
  @Input() measuringpoints: Measuringpoint[];

  constructor() {
    
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    }).setView([46.49638, 11.35862], 11);
    this.measuringpoints.forEach(element => {
      L.marker([element.Latitude, element.Altitude]).addTo(this.map);
    });
    
  }

  ngAfterViewInit(): void {
    this.initMap();
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
  }
}
