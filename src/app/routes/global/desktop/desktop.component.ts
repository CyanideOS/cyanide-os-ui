import { Component, OnInit } from "@angular/core";
import { TopbarPanelService } from "src/app/services/public/api/panel/topbar/topbar.service";

@Component({
  selector: "app-desktop",
  templateUrl: "./desktop.component.html",
  styleUrls: ["./desktop.component.scss"],
})
export class DesktopComponent implements OnInit {
  constructor(private topbarPanelService: TopbarPanelService) {}

  desktopFocused() {
    console.log("fdjo");
    this.topbarPanelService.title.next("CyanideOS");
  }

  ngOnInit(): void {}
}
