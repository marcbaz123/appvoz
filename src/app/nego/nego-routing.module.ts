import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NegoPage } from './nego.page';

const routes: Routes = [
  {
    path: '',
    component: NegoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NegoPageRoutingModule {}
