import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroPageRoutingModule } from './intro-routing.module';

import { IntroPage } from './intro.page';
import { VerticalStepsModule } from 'src/app/components/vertical-steps/vertical-steps.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroPageRoutingModule,
    VerticalStepsModule,
  ],
  declarations: [IntroPage]
})
export class IntroPageModule {}
