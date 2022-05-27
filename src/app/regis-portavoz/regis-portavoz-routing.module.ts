import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisPortavozPage } from './regis-portavoz.page';

const routes: Routes = [
  {
    path: '',
    component: RegisPortavozPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisPortavozPageRoutingModule {}
