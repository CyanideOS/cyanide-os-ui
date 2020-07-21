import { Component, OnInit } from "@angular/core";
import { PanelService } from "../../../services/public/api/panel/panel.service";

@Component({
  selector: "taskbar",
  templateUrl: "./taskbar.component.html",
  styleUrls: ["./taskbar.component.scss"],
})
export class TaskbarComponent implements OnInit {
  constructor(private panelService: PanelService) {}

  openNotificationPanel(): void {
    this.panelService.isNotificationsOpened.next(true);
  }

  ngOnInit(): void {}
}
