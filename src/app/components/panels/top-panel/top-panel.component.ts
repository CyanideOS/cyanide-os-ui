import { Component, OnInit } from '@angular/core';
import { NotificationsManagerService } from 'src/app/services/panel/notifications-manager/notifications-manager.service';
import { TopPanelManagerService } from 'src/app/services/panel/top-panel-manager/top-panel-manager.service';

@Component({
  selector: 'TopPanel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.scss'],
})
export class TopPanelComponent implements OnInit {
  constructor(
    protected notificationsManagerService: NotificationsManagerService,
    public topPanelManagerService: TopPanelManagerService
  ) {}

  toggleNotificationPanel(): void {
    this.notificationsManagerService.isNotificationsOpened.next(
      !this.notificationsManagerService.isNotificationsOpened.value
    );
  }

  ngOnInit(): void {}
}
