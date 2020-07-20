import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskbarComponent } from './components/global/taskbar/taskbar.component';
import { NotificationPanelComponent } from './components/global/notification-panel/notification-panel.component';
import { NativeSdkComponent } from './components/native-sdk/native-sdk.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskbarComponent,
    NotificationPanelComponent,
    NativeSdkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
