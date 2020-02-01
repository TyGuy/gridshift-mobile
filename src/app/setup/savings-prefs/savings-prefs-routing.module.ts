import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavingsPrefsPage } from './savings-prefs.page';

const routes: Routes = [
  {
    path: '',
    component: SavingsPrefsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavingsPrefsPageRoutingModule {}
