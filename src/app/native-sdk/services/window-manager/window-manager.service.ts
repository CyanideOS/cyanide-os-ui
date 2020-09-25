import { Injectable } from '@angular/core';
import { ApplicationInterface, WindowInterface } from './interfaces';
import { BehaviorSubject } from 'rxjs';
import { TaskManagerService } from 'src/app/services/managers/task-manager/task-manager.service';
import { TopPanelManagerService } from 'src/app/services/panel/top-panel-manager/top-panel-manager.service';

@Injectable({
  providedIn: 'root',
})
export class WindowsManagerService {
  //! This should be retrieved from local database where all registeries resides!
  installedApps: BehaviorSubject<{
    [key: string]: ApplicationInterface;
  }> = new BehaviorSubject<{ [key: string]: ApplicationInterface }>({
    'ms-outlook.microsoft.com': {
      name: 'Microsoft Outlook',
      component: 'ms-outlook-microsoft-com',
      packageName: 'ms-outlook.microsoft.com',
      installedOn: 1600882638399,
    },
  });

  openedWindows: BehaviorSubject<Array<WindowInterface>> = new BehaviorSubject<
    Array<WindowInterface>
  >([
    // {
    //   packageName: 'ms-outlook.microsoft.com',
    //   pid: -1,
    //   name: 'Microsoft Outlook',
    //   zIndex: 1e4,
    // },
  ]);

  constructor(
    protected taskManagerService: TaskManagerService,
    protected topPanelManagerService: TopPanelManagerService
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
    this.topPanelManagerService.title.next(currentWindow.name);
  }

  openWindowByPackageName(packageName: string, args: Object = {}): void {
    /// Register the task
    const pid: number = this.taskManagerService.registerTask(packageName);

    /// Register window so that it can be visible
    let newWindows: Array<WindowInterface> = this.openedWindows.value;
    let currentWindow: WindowInterface = {
      packageName: packageName,
      name: this.installedApps.value[packageName].name,
      title: this.installedApps.value[packageName].name,
      pid: pid,
      width: 70,
      height: 50,
      zIndex: this.getMaxWindowZIndex() + 1,
      icon: '',
      positionY: 8,
      positionX: 18,
      isClosable: true,
      isMaximizable: true,
      isMinimizable: true,
      isModal: false,
      isOpenAtCenter: true,
    };
    newWindows.push(currentWindow);
    this.openedWindows.next(newWindows);
    this.topPanelManagerService.title.next(currentWindow.name);
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
    this.taskManagerService.disposeTaskByPid(pid);

    /// Dispose off the window
    this.openedWindows.next(
      this.openedWindows.value.filter((window: WindowInterface) => {
        return window.pid != pid;
      })
    );
  }
}
