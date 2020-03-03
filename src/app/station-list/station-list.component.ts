import { Component, OnInit, Input } from '@angular/core';
import { SnowReportBase } from 'src/shared/snow-report-base';

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.scss']
})
export class StationListComponent implements OnInit {
  @Input() snowreports: Array<SnowReportBase>;
  breakpoint: number;

  constructor() { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 600) ? 1 : 6;
}

onResize(event) {
  this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 6;
}
}
