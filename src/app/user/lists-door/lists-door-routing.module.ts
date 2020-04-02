import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListsDoorPage } from './lists-door.page';

const routes: Routes = [
  {
    path: '',
    component: ListsDoorPage
  },
  {
    path: 'door:id',
    loadChildren: () => import('./door/door.module').then( m => m.DoorPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListsDoorPageRoutingModule {}
