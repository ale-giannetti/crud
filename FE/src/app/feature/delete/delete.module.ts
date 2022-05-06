import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteRoutingModule } from './delete-routing.module';
import { DeleteComponent } from './delete.component';
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    DeleteComponent
  ],
  imports: [
    CommonModule,
    DeleteRoutingModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class DeleteModule { }
