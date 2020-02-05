import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SnowReportBaseData } from 'src/shared/snow-report-base-data';
@Injectable({
  providedIn: 'root'
})
export class SnowReportService {

  API = "http://tourism.opendatahub.bz.it/api/Weather/Measuringpoint?elements=0";
  SNOWREPORT = "http://tourism.opendatahub.bz.it/api/Weather/SnowReport?lang=de";
  constructor(
    private http: HttpClient
  ) { }

  getSnowReports(): Observable<SnowReportBaseData[]>{
    return this.http.get<SnowReportBaseData[]>(this.SNOWREPORT);
  }
}
