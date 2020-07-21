import { Component, OnInit } from "@angular/core";
import { NotificationPanelService } from "../../../services/public/api/panel/notification/notification.service";
import { TopbarPanelService } from "src/app/services/public/api/panel/topbar/topbar.service";

@Component({
  selector: "topbar",
  templateUrl: "./topbar.component.html",
  styleUrls: ["./topbar.component.scss"],
})
export class TopbarComponent implements OnInit {
  constructor(
    private notificationPanelService: NotificationPanelService,
    public topbarPanelService: TopbarPanelService
  ) {}

  toggleNotificationPanel(): void {
    this.notificationPanelService.isNotificationsOpened.next(
      !this.notificationPanelService.isNotificationsOpened.value
    );
  }

  ngOnInit(): void {}
}
