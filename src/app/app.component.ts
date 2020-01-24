import { Component, OnInit } from '@angular/core';
import { SnowReportService } from 'src/services/snow-report.service';
import { SnowReportBaseData } from 'src/shared/snow-report-base-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  snowreports: SnowReportBaseData[];

  constructor(
    private snowReportService: SnowReportService
  ){

  }

  ngOnInit(){
    this.snowReportService.getSnowReports().subscribe(
      snowreports => this.snowreports = snowreports
    ); 
  }
}
