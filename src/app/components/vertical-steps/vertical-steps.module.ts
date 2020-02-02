import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalStepsComponent } from './vertical-steps.component';

@NgModule({
  declarations: [
    VerticalStepsComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    VerticalStepsComponent,
  ]
})
export class VerticalStepsModule { }
