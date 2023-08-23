import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySmartInputComponent } from '../my-smart-input/my-smart-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MySmartInputComponent
  ],
  exports: [
    MySmartInputComponent
  ]
})
export class AppModule { }