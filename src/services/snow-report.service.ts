import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SkiArea } from 'src/shared/ski-areas-classes';
import { SnowReportBase, Measuringpoint } from 'src/shared/snow-report-base';
@Injectable({
  providedIn: 'root'
})
export class SnowReportService {

  private MEASURINGPOINT = "http://tourism.opendatahub.bz.it/api/Weather/Measuringpoint/";
  private SNOWREPORT = "http://tourism.opendatahub.bz.it/api/Weather/SnowReport?lang=de";
  private SKIAREA = "http://tourism.opendatahub.bz.it/api/SkiArea/";
  constructor(
    private http: HttpClient
  ) { }

  getSnowReports(): Observable<SnowReportBase[]>{
    return this.http.get<SnowReportBase[]>(this.SNOWREPORT);
  }

  getMeasuringpoint(ID: string): Observable<Measuringpoint>{
    return this.http.get<Measuringpoint>(this.MEASURINGPOINT + ID);
  }

  getSkiArea(RID: string): Observable<SkiArea>{
    return this.http.get<SkiArea>(this.SKIAREA + RID);
  }
}
