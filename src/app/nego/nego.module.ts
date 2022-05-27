import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NegoPageRoutingModule } from './nego-routing.module';

import { NegoPage } from './nego.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NegoPageRoutingModule
  ],
  declarations: [NegoPage]
})
export class NegoPageModule {}
