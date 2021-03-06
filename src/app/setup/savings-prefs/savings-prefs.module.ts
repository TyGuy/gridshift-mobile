import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavingsPrefsPageRoutingModule } from './savings-prefs-routing.module';

import { SavingsPrefsPage } from './savings-prefs.page';
import { VerticalStepsModule } from 'src/app/components/vertical-steps/vertical-steps.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavingsPrefsPageRoutingModule,
    VerticalStepsModule,
  ],
  declarations: [
    SavingsPrefsPage,
  ]
})
export class SavingsPrefsPageModule {}
