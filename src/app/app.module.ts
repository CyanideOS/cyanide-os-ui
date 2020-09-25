import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NativeSdkModule } from './native-sdk/native-sdk.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationPanelComponent } from './components/panels/notification-panel/notification-panel.component';
import { TaskPanelComponent } from './components/panels/task-panel/task-panel.component';
import { TopPanelComponent } from './components/panels/top-panel/top-panel.component';
import { DesktopComponent } from './components/desktop/desktop.component';
import { WidgetComponent } from './components/desktop/widget/widget.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationPanelComponent,
    TaskPanelComponent,
    TopPanelComponent,
    DesktopComponent,
    WidgetComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NativeSdkModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
