import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScenarioCreatePage } from './scenario-create.page';

const routes: Routes = [
  {
    path: '',
    component: ScenarioCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScenarioCreatePageRoutingModule {}
