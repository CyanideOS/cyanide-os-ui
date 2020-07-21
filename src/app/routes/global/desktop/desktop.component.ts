import { Component, OnInit } from "@angular/core";
import { TopbarPanelService } from "src/app/services/public/api/panel/topbar/topbar.service";
import { WindowsService } from "../../../services/public/api/windows/windows.service";

@Component({
  selector: "app-desktop",
  templateUrl: "./desktop.component.html",
  styleUrls: ["./desktop.component.scss"],
})
export class DesktopComponent implements OnInit {
  constructor(
    private topbarPanelService: TopbarPanelService,
    protected windowsService: WindowsService
  ) {}

  desktopFocused() {
    this.topbarPanelService.title.next("CyanideOS");
  }

  openNewWindow() {
    this.windowsService.openWindowByPackageName("ms-outlook.microsoft.com");
  }

  ngOnInit(): void {}
}
