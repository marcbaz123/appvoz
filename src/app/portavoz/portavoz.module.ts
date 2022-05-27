import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortavozPageRoutingModule } from './portavoz-routing.module';

import { PortavozPage } from './portavoz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortavozPageRoutingModule
  ],
  declarations: [PortavozPage]
})
export class PortavozPageModule {}
