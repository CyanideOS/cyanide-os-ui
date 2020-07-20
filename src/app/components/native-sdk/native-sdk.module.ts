import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NativeSdkComponent } from "./native-sdk.component";
import { BrowserModule } from "@angular/platform-browser";
import { ButtonComponent } from "./button/button.component";

@NgModule({
  declarations: [NativeSdkComponent, ButtonComponent],
  imports: [BrowserModule, CommonModule],
  exports: [NativeSdkComponent],
})
export class NativeSdkModule {}
