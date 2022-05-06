import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetAllRoutingModule } from './get-all-routing.module';
import { GetAllComponent } from './get-all.component';
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [
    GetAllComponent
  ],
    imports: [
        CommonModule,
        GetAllRoutingModule,
        MatTableModule
    ]
})
export class GetAllModule { }
