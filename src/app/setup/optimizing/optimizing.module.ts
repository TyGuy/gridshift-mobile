import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptimizingPageRoutingModule } from './optimizing-routing.module';

import { OptimizingPage } from './optimizing.page';
import { VerticalStepsModule } from 'src/app/components/vertical-steps/vertical-steps.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptimizingPageRoutingModule,
    VerticalStepsModule,
  ],
  declarations: [OptimizingPage]
})
export class OptimizingPageModule {}
