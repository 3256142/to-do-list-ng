import { Component, OnInit } from '@angular/core';
import { ToDosService } from '../to-dos.service';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css']
})
export class ToDoFormComponent implements OnInit {
  // V1
  // - Create a form field to add new todo items todo list (taskName)
  // - Display preview before adding to list (Accessing value : fieldName.value)
  // - Clear input (Programmatically setting value: fieldName.setValue())
  // - Make todo item form field Required and minLength (Adding Validators.required)
  // - If field invalid, disabled addButton (Accessing form input status: fieldName.status/ fieldName.invalid && (fieldName.dirty || fieldName.touched)")
  // - Display error message (Get list of errors : fieldName.errors)

  // V2
  // - Expand todolist input to receive multiple values ( taskName, taskDescription, assignedTo, difficultyRating)
  // - Create more input fields 
  // - Preview area to display values
  // - Submit Form on Enter/<input type submit> ( ngSubmit to capture value of current form )
  // - Disabled submit if any point of form group is invalid 
  // - New Approach: Trigger validation only on submit (boolean val to set displayError)



  constructor(private toDoService: ToDosService) { }

  ngOnInit() {
  }

  addTask(){
    this.toDoService.addTasks()
  }

}
