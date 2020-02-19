import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SnowReportService } from 'src/services/snow-report.service';
import { HttpClientModule } from '@angular/common/http';
import { StationListComponent } from './station-list/station-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MapComponent } from './map/map.component';
import { StationDetailComponent } from './station-detail/station-detail.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    StationListComponent,
    MapComponent,
    StationDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatGridListModule,
    AppRoutingModule
  ],
  providers: [SnowReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
