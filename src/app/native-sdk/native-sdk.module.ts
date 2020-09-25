import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowComponent } from './window/window.component';
import { NativeButton } from './ui/button/button.component';
import { NativeCheckbox } from './ui/checkbox/checkbox.component';
import { TextboxComponent } from './ui/textbox/textbox.component';

@NgModule({
  declarations: [
    WindowComponent,
    NativeButton,
    NativeCheckbox,
    TextboxComponent,
  ],
  exports: [WindowComponent, NativeButton, NativeCheckbox, TextboxComponent],
  imports: [CommonModule],
})
export class NativeSdkModule {}
