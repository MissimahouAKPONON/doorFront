import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NetworkOutPageRoutingModule } from './network-out-routing.module';

import { NetworkOutPage } from './network-out.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NetworkOutPageRoutingModule
  ],
  declarations: [NetworkOutPage]
})
export class NetworkOutPageModule {}
