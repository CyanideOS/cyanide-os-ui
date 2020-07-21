import { Component, OnInit } from "@angular/core";
import { PanelService } from "src/app/services/public/api/panel/panel.service";

@Component({
  selector: "notification-panel",
  templateUrl: "./notification-panel.component.html",
  styleUrls: ["./notification-panel.component.scss"],
})
export class NotificationPanelComponent implements OnInit {
  constructor(public panelService: PanelService) {}

  ngOnInit(): void {}
}
