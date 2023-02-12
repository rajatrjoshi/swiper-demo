import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';

// import { ContentDesignComponent } from '@components/content-design/content-design.component';
const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeComponent
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
