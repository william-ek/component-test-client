import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RunsComponent } from './runs/runs.component';
import { RunsDetailComponent } from './runs/runs-detail/runs-detail.component';
import { RunsItemComponent } from './runs/runs-list/runs-item/runs-item.component';
import { RunsListComponent } from './runs/runs-list/runs-list.component';
import { StationsComponent } from './stations/stations.component';
import { StationsDetailComponent } from './stations/stations-detail/stations-detail.component';
import { StationsItemComponent } from './stations/stations-list/stations-item/stations-item.component';
import { StationsListComponent } from './stations/stations-list/stations-list.component';
import { TestscriptsComponent } from './testscripts/testscripts.component';
import { TestscriptsDetailComponent } from './testscripts/testscripts-detail/testscripts-detail.component';
import { TestscriptsItemComponent } from './testscripts/testscripts-list/testscripts-item/testscripts-item.component';
import { TestscriptsListComponent } from './testscripts/testscripts-list/testscripts-list.component';
import { TestablecomponentsComponent } from './testablecomponents/testablecomponents.component';
import { TestablecomponentsDetailComponent } from './testablecomponents/testablecomponents-detail/testablecomponents-detail.component';
import { TestablecomponentsItemComponent } from './testablecomponents/testablecomponents-list/testablecomponents-item/testablecomponents-item.component';
import { TestablecomponentsListComponent } from './testablecomponents/testablecomponents-list/testablecomponents-list.component';
import { HomeComponent } from './home/home.component';
import { AdminstrationComponent } from './adminstration/adminstration.component';
import { TestingComponent } from './testing/testing.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'administration', component: AdminstrationComponent},
  { path: 'testing', component: TestingComponent},
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
