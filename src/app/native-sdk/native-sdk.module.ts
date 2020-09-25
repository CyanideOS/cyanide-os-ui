import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowComponent } from './window/window.component';
import { ButtonComponent } from './ui/button/button.component';
import { CheckboxComponent } from './ui/checkbox/checkbox.component';
import { TextboxComponent } from './ui/textbox/textbox.component';



@NgModule({
  declarations: [WindowComponent, ButtonComponent, CheckboxComponent, TextboxComponent],
  imports: [
    CommonModule
  ]
})
export class NativeSdkModule { }
