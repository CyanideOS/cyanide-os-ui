import { Injectable } from "@angular/core";
import { TasksService } from "../tasks/tasks.service";
import { WindowInterface } from "./interfaces";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class WindowsService {
  //! This should be retrieved from local database where all registeries resides!
  installedApps: BehaviorSubject<object> = new BehaviorSubject({
    /// package: component-name
    "ms-outlook.microsoft.com": "ms-outlook-microsoft-com",
  });

  openedWindows: BehaviorSubject<Array<WindowInterface>> = new BehaviorSubject<
    Array<WindowInterface>
  >([
    {
      packageName: "ms-outlook.microsoft.com",
      pid: -1,
      zIndex: 1e4,
    },
  ]);

  constructor(protected tasksService: TasksService) {}

  bringToFront(packageName: string, pid: number) {
    let newWindows: Array<WindowInterface> = this.openedWindows.value;
    newWindows.forEach((window) => {
      if (window.pid === pid) {
        window.zIndex = this.getMaxWindowZIndex() + 1;
      }
    });
    this.openedWindows.next(newWindows);
    console.log("Bring to front", packageName, pid);
  }

  openWindowByPackageName(packageName: string, args: Object = {}) {
    console.log(packageName, args);
    /// Register the task
    const pid: number = this.tasksService.registerTask(packageName);

    /// Register window so that it can be visible
    let newWindows: Array<WindowInterface> = this.openedWindows.value;
    newWindows.push({
      packageName: packageName,
      pid: pid,
      zIndex: this.getMaxWindowZIndex() + 1,
    });
    this.openedWindows.next(newWindows);

    // /// Bring focus to the this window
    // this.bringToFront(packageName, pid);
  }

  getMaxWindowZIndex(): number {
    let zIndex: number = 1e3;
    this.openedWindows.value.forEach((window) => {
      if (window.zIndex > zIndex) zIndex = window.zIndex;
    });
    return zIndex;
  }

  closeWindowByPid(pid: number): void {
    /// Dispose/Unregister the window task
    this.tasksService.disposeTaskByPid(pid);

    /// Dispose off the window
    this.openedWindows.next(
      this.openedWindows.value.filter((window: WindowInterface) => {
        return window.pid != pid;
      })
    );
  }
}
