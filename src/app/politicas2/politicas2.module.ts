import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Politicas2PageRoutingModule } from './politicas2-routing.module';

import { Politicas2Page } from './politicas2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Politicas2PageRoutingModule
  ],
  declarations: [Politicas2Page]
})
export class Politicas2PageModule {}
