import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddCarComponent } from './components/add-car/add-car.component';

const appRoutes: Routes = [
  
{path: 'dashboard', component: DashboardComponent},
{path: 'add', component: AddCarComponent},
{path: '', component: DashboardComponent}
];  //default DashboardComponent

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)]
})
export class AppRoutingModule {}
