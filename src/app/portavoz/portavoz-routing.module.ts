import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortavozPage } from './portavoz.page';

const routes: Routes = [
  {
    path: '',
    component: PortavozPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortavozPageRoutingModule {}
