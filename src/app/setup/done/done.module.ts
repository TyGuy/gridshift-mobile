import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonePageRoutingModule } from './done-routing.module';

import { DonePage } from './done.page';
import { VerticalStepsModule } from 'src/app/components/vertical-steps/vertical-steps.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonePageRoutingModule,
    VerticalStepsModule,
  ],
  declarations: [DonePage]
})
export class DonePageModule {}
