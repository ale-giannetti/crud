import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetIDRoutingModule } from './get-id-routing.module';
import { DetailComponent } from './detail/detail.component';
import {GetIDComponent} from "./get-id.component";



@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    GetIDRoutingModule
  ]
})
export class GetIDModule { }
