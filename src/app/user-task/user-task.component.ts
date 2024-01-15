import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserModel } from '../user-model';

@Component({
  selector: 'app-user-task',
  templateUrl: './user-task.component.html',
  styleUrl: './user-task.component.scss'
})
export class UserTaskComponent {
  @Output() addTodo = new EventEmitter<UserModel>();
  todoForm : FormGroup;

  constructor(private fb :FormBuilder){
    this.todoForm= this.fb.group({

      Name :'',
      Task:'',
      isCompleted:false
    
    });
  }
  onSubmit(): void {
    const todoData = this.todoForm.value as UserModel;
    const newTodo = new UserModel(todoData.Name, todoData.Task, todoData.isCompleted);
    this.addTodo.emit(newTodo);
    this.todoForm.reset();
  }

}
