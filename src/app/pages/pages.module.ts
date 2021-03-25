import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [
    DashboardComponent,
    DetailsComponent,
    ShoppingCartComponent,
    PagesComponent
  ],
  exports: [
    DashboardComponent,
    DetailsComponent,
    ShoppingCartComponent,
    PagesComponent
  ]
  ,
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    RouterModule,
    HttpClientModule
  ]
})
export class PagesModule { }
