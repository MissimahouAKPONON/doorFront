import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScenarioCreatePageRoutingModule } from './scenario-create-routing.module';

import { ScenarioCreatePage } from './scenario-create.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ScenarioCreatePageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [ScenarioCreatePage]
})
export class ScenarioCreatePageModule {}
