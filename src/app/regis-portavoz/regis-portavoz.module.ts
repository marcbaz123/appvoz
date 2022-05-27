import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisPortavozPageRoutingModule } from './regis-portavoz-routing.module';

import { RegisPortavozPage } from './regis-portavoz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisPortavozPageRoutingModule
  ],
  declarations: [RegisPortavozPage]
})
export class RegisPortavozPageModule {}
