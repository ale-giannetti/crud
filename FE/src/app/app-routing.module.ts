import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GetIDModule} from "./feature/get-id/get-id.module";

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('src/app/feature/home/home.module').then(m => m.HomeModule)
  },
  {
    path:'getId',
      loadChildren: () => import('src/app/feature/get-id/get-id.module').then(m => m.GetIDModule)
  },
  {
    path: 'getAll',
    loadChildren: () => import('src/app/feature/get-all/get-all.module').then(m => m.GetAllModule)
  },
  {
    path: 'post',
    loadChildren: () => import('src/app/feature/post/post.module').then(m => m.PostModule)
  },
  {
    path: 'delete',
    loadChildren: () => import('src/app/feature/delete/delete.module').then(m => m.DeleteModule)
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
