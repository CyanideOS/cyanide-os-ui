import { Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { WindowsService } from "src/app/services/public/api/windows/windows.service";
import { WindowInterface } from "src/app/services/public/api/windows/interfaces";

@Component({
  selector: "windows-manager",
  templateUrl: "./windows.component.html",
  styleUrls: ["./windows.component.scss"],
})
export class WindowsComponent implements OnInit {
  windows: BehaviorSubject<Array<WindowInterface>> = new BehaviorSubject<
    Array<WindowInterface>
  >([]);

  constructor(private windowsService: WindowsService) {}

  ngOnInit(): void {
    this.windows = this.windowsService.openedWindows;
  }

  getPid(window: any) {
    return window.pid;
  }
}
