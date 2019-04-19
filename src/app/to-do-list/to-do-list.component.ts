import { Component, OnInit } from '@angular/core';
import { ToDosService } from '../to-dos.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  tasks = []

  constructor(private toDoService: ToDosService) { }

  ngOnInit() {
    this.toDoService.getTasks().subscribe(tasks => {
      this.tasks = tasks
    })
  }

}
