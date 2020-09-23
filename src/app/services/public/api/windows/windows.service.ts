import { Injectable } from "@angular/core";
import { TasksService } from "../tasks/tasks.service";
import { ApplicationInterface, WindowInterface } from "./interfaces";
import { BehaviorSubject } from "rxjs";

import { TopbarPanelService } from "../panel/topbar/topbar.service";
@Injectable({
  providedIn: "root",
})
export class WindowsService {
  //! This should be retrieved from local database where all registeries resides!
  installedApps: BehaviorSubject<{
    [key: string]: ApplicationInterface;
  }> = new BehaviorSubject<{ [key: string]: ApplicationInterface }>({
    "ms-outlook.microsoft.com": {
      name: "Microsoft Outlook",
      component: "ms-outlook-microsoft-com",
      packageName: "ms-outlook.microsoft.com",
      installedOn: 1600882638399,
    },
  });

  openedWindows: BehaviorSubject<Array<WindowInterface>> = new BehaviorSubject<
    Array<WindowInterface>
  >([
    {
      packageName: "ms-outlook.microsoft.com",
      pid: -1,
      name: "Microsoft Outlook",
      zIndex: 1e4,
    },
  ]);

  constructor(
    protected tasksService: TasksService,
    protected topbarPanelService: TopbarPanelService
  ) {}

  bringToFront(pid: number) {
    let currentWindow: WindowInterface;
    let newWindows: Array<WindowInterface> = this.openedWindows.value;
    newWindows.forEach((window) => {
      if (window.pid === pid) {
        window.zIndex = this.getMaxWindowZIndex() + 1;
        currentWindow = window;
      }
    });
    this.openedWindows.next(newWindows);
    this.topbarPanelService.title.next(currentWindow.name);
  }

  openWindowByPackageName(packageName: string, args: Object = {}): void {
    /// Register the task
    const pid: number = this.tasksService.registerTask(packageName);

    /// Register window so that it can be visible
    let newWindows: Array<WindowInterface> = this.openedWindows.value;
    let currentWindow: WindowInterface = {
      packageName: packageName,
      name: this.installedApps.value[packageName].name,
      pid: pid,
      zIndex: this.getMaxWindowZIndex() + 1,
    };
    newWindows.push(currentWindow);
    this.openedWindows.next(newWindows);
    this.topbarPanelService.title.next(currentWindow.name);
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
