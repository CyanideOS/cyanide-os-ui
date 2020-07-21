import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TopbarPanelService {
  title: BehaviorSubject<string> = new BehaviorSubject("CyanideOS");

  constructor() {}
}
