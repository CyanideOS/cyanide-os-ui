import { Injectable } from "@angular/core";
import { TasksService } from "../tasks/tasks.service";
import { WindowInterface } from "./interfaces";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class WindowsService {
  //! This should be retrieved from local database where all registeries resides!
  installedApps: object = {
    /// package: component-name
    "ms-outlook.microsoft.com": "ms-outlook-microsoft-com",
  };

  openedWindows: BehaviorSubject<Array<WindowInterface>> = new BehaviorSubject<
    Array<WindowInterface>
  >([]);

  constructor(protected tasksService: TasksService) {}

  bringToFront(packageName: string, pid: number) {
    console.log("Bring to front", packageName, pid);
  }

  openWindowByPackageName(packageName: string, args: Object = {}) {
    console.log(packageName, args);
    /// Register the task
    const pid: number = this.tasksService.registerTask(packageName);

    /// Register window so that it can be visible
    let newWindows: Array<WindowInterface> = this.openedWindows.value;
    newWindows.push({ packageName: packageName, pid: pid });
    this.openedWindows.next(newWindows);

    /// Bring focus to the this window
    this.bringToFront(packageName, pid);
  }

  closeWindowByPid(pid: number) {
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
