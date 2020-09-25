import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TaskInterface } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class TaskManagerService {
  static lastPid: number = -1;

  tasks: BehaviorSubject<Array<TaskInterface>> = new BehaviorSubject([
    {
      packageName: 'ms-outlook.microsoft.com',
      pid: 0,
    },
  ]);

  registerTask(packageName: string): number {
    let newTasks = this.tasks.value;
    newTasks.push({
      packageName: packageName,
      pid: TaskManagerService.lastPid + 1,
    });
    TaskManagerService.lastPid++;
    this.tasks.next(newTasks);
    return TaskManagerService.lastPid;
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
