import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListsDoorPage } from './lists-door.page';

const routes: Routes = [
  {
    path: '',
    component: ListsDoorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListsDoorPageRoutingModule {}
