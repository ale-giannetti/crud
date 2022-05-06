import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    SharedModule,
    RouterModule
  ]
})
export class LayoutModule { }
