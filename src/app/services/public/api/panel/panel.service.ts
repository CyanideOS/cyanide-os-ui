import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PanelService {
  isNotificationsOpened: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor() {}
}
