import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NotificationPanelService {
  isNotificationsOpened: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {}
}
