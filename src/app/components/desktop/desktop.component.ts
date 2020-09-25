import { Component, OnInit } from "@angular/core";
import { WindowsManagerService } from "src/app/native-sdk/services/window-manager/window-manager.service";
import { TopPanelManagerService } from "src/app/services/panel/top-panel-manager/top-panel-manager.service";

@Component({
  selector: "Desktop",
  templateUrl: "./desktop.component.html",
  styleUrls: ["./desktop.component.scss"],
})
export class DesktopComponent implements OnInit {
  constructor(
    protected topPanelManagerService: TopPanelManagerService,
    protected windowsManagerService: WindowsManagerService
  ) {}

  desktopFocused() {
    this.topPanelManagerService.title.next("CyanideOS");
  }

  openNewWindow() {
    this.windowsManagerService.openWindowByPackageName(
      "settings.cyanide.application"
    );
  }

  ngOnInit(): void {}
}
