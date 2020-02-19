import { Component, OnInit } from '@angular/core';
import { SnowReportService } from 'src/services/snow-report.service';
import { SnowReportBaseData } from 'src/shared/snow-report-base-data';
import { SkiArea } from './ski-areas-classes';
import { Measuringpoint } from 'src/shared/measuringpoint';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  snowreports: SnowReportBaseData[];
  skiarea: SkiArea;
  measuringpoint: Measuringpoint;

  constructor(
    private snowReportService: SnowReportService
  ) {

  }

  ngOnInit() {
    this.snowReportService.getSnowReports().subscribe(
      snowreports => {
        this.snowreports = snowreports;
        this.snowReportService.getSkiArea(this.snowreports[0].RID)
          .subscribe(skiarea => this.skiarea = skiarea);
      });
  }

  getMeasuringpoint(rid: string) {
    this.snowReportService.getMeasuringpoint(rid).subscribe(
      measuringpoint => this.measuringpoint = measuringpoint);
  }
}
