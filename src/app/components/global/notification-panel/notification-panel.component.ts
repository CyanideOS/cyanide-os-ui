import { Component, OnInit } from "@angular/core";
import { NotificationPanelService } from "src/app/services/public/api/panel/notification/notification.service";

@Component({
  selector: "notification-panel",
  templateUrl: "./notification-panel.component.html",
  styleUrls: ["./notification-panel.component.scss"],
})
export class NotificationPanelComponent implements OnInit {
  constructor(public panelService: NotificationPanelService) {}

  ngOnInit(): void {}
}
