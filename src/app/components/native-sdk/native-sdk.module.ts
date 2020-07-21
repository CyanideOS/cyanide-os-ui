import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NativeSdkComponent } from "./native-sdk.component";
import { BrowserModule } from "@angular/platform-browser";
import { ButtonComponent } from "./button/button.component";
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  declarations: [NativeSdkComponent, ButtonComponent, CheckboxComponent],
  imports: [BrowserModule, CommonModule],
  exports: [NativeSdkComponent],
})
export class NativeSdkModule {}
