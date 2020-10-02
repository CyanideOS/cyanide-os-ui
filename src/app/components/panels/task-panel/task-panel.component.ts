import { Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { WindowsManagerService } from "../../../services/managers/window-manager/window-manager.service";
import { TaskManagerService } from "src/app/services/managers/task-manager/task-manager.service";

@Component({
  selector: "TaskPanel",
  templateUrl: "./task-panel.component.html",
  styleUrls: ["./task-panel.component.scss"],
})
export class TaskPanelComponent implements OnInit {
  tasks: BehaviorSubject<
    Array<{
      icon: string;
      action: any;
    }>
  > = new BehaviorSubject([]);

  constructor(
    protected taskManagerService: TaskManagerService,
    protected windowsManagerService: WindowsManagerService
  ) {}

  ngOnInit(): void {
    this.taskManagerService.tasks.subscribe((tasks) => {
      let newTasks = [];
      tasks.forEach((task) => {
        newTasks.push({
          icon: "outlook-48x48.svg",
          action: () => {
            this.windowsManagerService.bringToFront(task.pid);
          },
        });
      });
      this.tasks.next(newTasks);
    });
  }
}
