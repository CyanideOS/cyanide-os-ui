import { Component, OnInit } from "@angular/core";
import { PanelService } from "../../../services/public/api/panel/panel.service";

@Component({
  selector: "taskbar",
  templateUrl: "./taskbar.component.html",
  styleUrls: ["./taskbar.component.scss"],
})
export class TaskbarComponent implements OnInit {
  constructor(private panelService: PanelService) {}

  toggleNotificationPanel(): void {
    this.panelService.isNotificationsOpened.next(
      !this.panelService.isNotificationsOpened.value
    );
  }

  ngOnInit(): void {}
}
