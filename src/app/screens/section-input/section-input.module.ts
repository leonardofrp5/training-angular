import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionInputComponent } from './section-input.component';



@NgModule({
  declarations: [SectionInputComponent],
  exports: [SectionInputComponent],
  imports: [
    CommonModule,
  ]
})
export class SectionInputModule { }
