import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SnowReportBaseData } from 'src/shared/snow-report-base-data';
import { SkiArea } from 'src/app/ski-areas-classes';
import { Measuringpoint } from 'src/shared/measuringpoint';
@Injectable({
  providedIn: 'root'
})
export class SnowReportService {

  MEASURINGPOINT = "http://tourism.opendatahub.bz.it/api/Weather/Measuringpoint/";
  SNOWREPORT = "http://tourism.opendatahub.bz.it/api/Weather/SnowReport?lang=de";
  SKIAREA = "http://tourism.opendatahub.bz.it/api/SkiArea/";
  constructor(
    private http: HttpClient
  ) { }

  getSnowReports(): Observable<SnowReportBaseData[]>{
    return this.http.get<SnowReportBaseData[]>(this.SNOWREPORT);
  }

  getMeasuringpoint(ID: string): Observable<Measuringpoint>{
    return this.http.get<Measuringpoint>(this.MEASURINGPOINT + ID);
  }

  getSkiArea(RID: string): Observable<SkiArea>{
    return this.http.get<SkiArea>(this.SKIAREA + RID);
  }
}
