import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDosService {
  tasks = new BehaviorSubject<string[]>(['Task 1'])

  constructor() {}

  addTasks(){
    let tempTasks = this.tasks.getValue()
    tempTasks.push('New Task')
    this.tasks.next(tempTasks)
  }

  getTasks(){
    return this.tasks
  }

}
