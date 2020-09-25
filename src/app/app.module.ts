import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationPanelComponent } from './components/panels/notification-panel/notification-panel.component';
import { TaskPanelComponent } from './components/panels/task-panel/task-panel.component';
import { TopPanelComponent } from './components/panels/top-panel/top-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationPanelComponent,
    TaskPanelComponent,
    TopPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
