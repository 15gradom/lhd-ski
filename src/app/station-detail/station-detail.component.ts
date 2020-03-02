import { Component, OnInit } from '@angular/core';
import { SnowReportService } from 'src/services/snow-report.service';
import { SnowReportBase } from 'src/shared/snow-report-base';
import { ActivatedRoute } from '@angular/router';
import { SkiArea } from 'src/shared/ski-areas-classes';

@Component({
  selector: 'app-station-detail',
  templateUrl: './station-detail.component.html',
  styleUrls: ['./station-detail.component.scss']
})
export class StationDetailComponent implements OnInit {

  snowreport: SnowReportBase;
  snowreportdetails: SkiArea;

  constructor(
    private sr: SnowReportService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sr.getSnowReports().subscribe(snowreport => {
      this.snowreport = snowreport.find(x => this.route.snapshot.params["id"] == x.RID);
      this.sr.getSkiArea(this.snowreport.RID).subscribe(snowreportdetails => {
        this.snowreportdetails = snowreportdetails;
      });
    });
  }

}
