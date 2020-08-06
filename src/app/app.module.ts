import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TopbarComponent } from "./components/global/topbar/topbar.component";
import { NotificationPanelComponent } from "./components/global/notification-panel/notification-panel.component";
import { NativeSdkModule } from "./components/native-sdk/native-sdk.module";
import { DesktopComponent } from "./routes/global/desktop/desktop.component";
import { WindowComponent } from "./components/global/window/window.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { TaskbarComponent } from "./components/global/taskbar/taskbar.component";
import { WindowsComponent } from "./components/managers/windows/windows.component";
import { ApplicationInstallerComponent } from "./routes/applications/system/application-installer/application-installer.component";
import { SettingsComponent } from "./routes/applications/system/settings/settings.component";
import { MessengerComponent } from "./routes/applications/installed/messenger/messenger.component";
import { OutlookComponent } from "./routes/applications/installed/outlook/outlook.component";

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    NotificationPanelComponent,
    DesktopComponent,
    WindowComponent,
    TaskbarComponent,
    WindowsComponent,
    OutlookComponent,
    ApplicationInstallerComponent,
    SettingsComponent,
    MessengerComponent,
  ],
  imports: [
    BrowserModule,
    NativeSdkModule,
    AppRoutingModule,
    DragDropModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
