import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListsDoorPageRoutingModule } from './lists-door-routing.module';

import { ListsDoorPage } from './lists-door.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListsDoorPageRoutingModule
  ],
  declarations: [ListsDoorPage]
})
export class ListsDoorPageModule {}
