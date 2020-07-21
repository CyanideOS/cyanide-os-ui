import { Injectable } from "@angular/core";
import { TasksService } from "../tasks/tasks.service";

@Injectable({
  providedIn: "root",
})
export class WindowsService {
  //! This should be retrieved from local database where all registeries resides!
  installedApps: {
    /// package: component-name
    "ms-outlook.microsoft.com": "ms-outlook-microsoft-com";
  };

  constructor(protected tasksService: TasksService) {}

  bringToFront(packageName: string, pid: number) {
    console.log("Bring to front", packageName, pid);
  }

  openWindowByPackageName(packageName: string, args: Object = {}) {
    console.log(packageName, args);
    this.tasksService.registerTask(packageName);
  }
}
