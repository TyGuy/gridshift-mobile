import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptimizingPage } from './optimizing.page';

const routes: Routes = [
  {
    path: '',
    component: OptimizingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptimizingPageRoutingModule {}
