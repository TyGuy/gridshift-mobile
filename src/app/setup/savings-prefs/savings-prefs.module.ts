import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavingsPrefsPageRoutingModule } from './savings-prefs-routing.module';

import { SavingsPrefsPage } from './savings-prefs.page';
import { VerticalStepsComponent } from 'src/app/components/vertical-steps/vertical-steps.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavingsPrefsPageRoutingModule,
  ],
  declarations: [
    SavingsPrefsPage,
    VerticalStepsComponent,
  ]
})
export class SavingsPrefsPageModule {}
