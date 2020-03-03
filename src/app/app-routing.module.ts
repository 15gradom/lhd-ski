import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StationListComponent } from './station-list/station-list.component';
import { StationDetailComponent } from './station-detail/station-detail.component';

const routes: Routes = [
  { path: '', component: StationListComponent, pathMatch: 'full' },
  { path: 'list', component: StationListComponent },
  { path: 'detail/:id', component: StationDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
