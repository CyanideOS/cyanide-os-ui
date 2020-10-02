import { Component, OnInit } from '@angular/core';
import { NotificationsManagerService } from 'src/app/services/panel/notifications-manager/notifications-manager.service';

@Component({
  selector: 'NotificationPanel',
  templateUrl: './notification-panel.component.html',
  styleUrls: ['./notification-panel.component.scss'],
})
export class NotificationPanelComponent implements OnInit {
  constructor(
    public notificationsManagerService: NotificationsManagerService
  ) {}

  ngOnInit(): void {}
}
