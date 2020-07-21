import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TopbarComponent } from "./components/global/topbar/topbar.component";
import { NotificationPanelComponent } from "./components/global/notification-panel/notification-panel.component";
import { NativeSdkModule } from "./components/native-sdk/native-sdk.module";
import { DesktopComponent } from "./routes/global/desktop/desktop.component";
import { WindowComponent } from "./components/global/window/window.component";
import { DragDropModule } from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    NotificationPanelComponent,
    DesktopComponent,
    WindowComponent,
  ],
  imports: [BrowserModule, NativeSdkModule, AppRoutingModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
