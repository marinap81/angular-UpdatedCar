import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AddCarComponent } from './components/add-car/add-car.component';
import { NAVComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  
    imports: [BrowserModule, FormsModule, AppRoutingModule, RouterModule, HttpClientModule],
    declarations: [AppComponent,AddCarComponent,NAVComponent,DashboardComponent],
    bootstrap: [AppComponent]
  })
export class AppModule {}
