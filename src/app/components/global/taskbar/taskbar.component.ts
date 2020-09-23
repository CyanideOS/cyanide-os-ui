import { Component, OnInit } from "@angular/core";
import { TasksService } from "src/app/services/public/api/tasks/tasks.service";
import { WindowsService } from "src/app/services/public/api/windows/windows.service";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "taskbar",
  templateUrl: "./taskbar.component.html",
  styleUrls: ["./taskbar.component.scss"],
})
export class TaskbarComponent implements OnInit {
  tasks: BehaviorSubject<
    Array<{
      icon: string;
      action: any;
    }>
  > = new BehaviorSubject([]);

  constructor(
    protected tasksService: TasksService,
    protected windowService: WindowsService
  ) {}

  ngOnInit(): void {
    this.tasksService.tasks.subscribe((tasks) => {
      let newTasks = [];
      tasks.forEach((task) => {
        newTasks.push({
          icon: "outlook-48x48.svg",
          action: () => {
            this.windowService.bringToFront(task.pid);
          },
        });
      });
      this.tasks.next(newTasks);
    });
  }
}
