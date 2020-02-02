import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryStatComponent } from './summary-stat.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    SummaryStatComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    SummaryStatComponent,
  ]
})
export class SummaryStatModule { }
