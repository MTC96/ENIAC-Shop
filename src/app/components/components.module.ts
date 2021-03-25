import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CardComponent } from './card/card.component';
import { PaginatorComponent } from './paginator/paginator.component';



@NgModule({
  declarations: [
    CardComponent,
    PaginatorComponent
  ],
  exports: [
    CardComponent,
    PaginatorComponent
  ]
  ,
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
