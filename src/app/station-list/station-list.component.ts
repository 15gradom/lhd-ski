import { Component, OnInit, Input } from '@angular/core';
import { SnowReportBase } from 'src/shared/snow-report-base';
import { SnowReportService } from 'src/services/snow-report.service';

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.scss']
})
export class StationListComponent implements OnInit {
  snowreports: Array<SnowReportBase>;
  breakpoint: number;

  constructor(
    private sr: SnowReportService
  ) { }

  ngOnInit() {
    this.sr.getSnowReports().subscribe(snowreports =>
      this.snowreports = snowreports
    );
    this.breakpoint = window.innerWidth / 400;
    if (this.breakpoint > 4)
      this.breakpoint = 4;
  }

  onResize(event) {
    this.breakpoint = event.target.innerWidth / 400;
    if (this.breakpoint > 4)
      this.breakpoint = 4;
  }
}
