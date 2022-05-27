import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Politicas2Page } from './politicas2.page';

const routes: Routes = [
  {
    path: '',
    component: Politicas2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Politicas2PageRoutingModule {}
