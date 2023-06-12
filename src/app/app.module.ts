import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
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
import { DropdownDirective } from './shared/dropdown.directive';
import { TestablecomponentsService } from './testablecomponents/testablecomponents.service';
import { TestablecomponentsrepositoryService } from './shared/testablecomponentsrepository.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RunsComponent,
    RunsDetailComponent,
    RunsItemComponent,
    RunsListComponent,
    StationsComponent,
    StationsDetailComponent,
    StationsItemComponent,
    StationsListComponent,
    TestablecomponentsComponent,
    TestablecomponentsDetailComponent,
    TestablecomponentsItemComponent,
    TestablecomponentsListComponent,
    TestscriptsComponent,
    TestscriptsDetailComponent,
    TestscriptsItemComponent,
    TestscriptsListComponent,
    HomeComponent,
    AdminstrationComponent,
    TestingComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    TestablecomponentsService,
    TestablecomponentsrepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
