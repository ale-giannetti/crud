import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GetIDComponent} from "./get-id.component";
import {DetailComponent} from "./detail/detail.component";

const routes: Routes = [
  {
    path: '',
    component: GetIDComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetIDRoutingModule { }
