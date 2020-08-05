import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { TaskInterface } from "./interfaces";

@Injectable({
  providedIn: "root",
})
export class TasksService {
  static lastPid: number = -1;

  tasks: BehaviorSubject<Array<TaskInterface>> = new BehaviorSubject([]);

  registerTask(packageName: string): number {
    let newTasks = this.tasks.value;
    newTasks.push({
      packageName: packageName,
      pid: TasksService.lastPid + 1,
    });
    TasksService.lastPid++;
    this.tasks.next(newTasks);
    return TasksService.lastPid + 1;
  }

  disposeTaskByPid(pid: number) {
    this.tasks.next(
      this.tasks.value.filter((task: TaskInterface) => {
        return task.pid != pid;
      })
    );
    console.log(this.tasks.value);
  }

  constructor() {}
}
