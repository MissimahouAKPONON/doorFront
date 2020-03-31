import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NetworkOutPage } from './network-out.page';

const routes: Routes = [
  {
    path: '',
    component: NetworkOutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NetworkOutPageRoutingModule {}
