import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TasksService {
  static lastPid: number = -1;

  tasks: BehaviorSubject<
    Array<{
      packageName: string;
      pid: number;
    }>
  > = new BehaviorSubject([]);

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

  constructor() {}
}
