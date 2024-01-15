import { Component } from '@angular/core';
import { UserModel } from '../user-model';

@Component({
  selector: 'app-user-task-list',
  templateUrl: './user-task-list.component.html',
  styleUrl: './user-task-list.component.scss'
})
export class UserTaskListComponent {
  todos: UserModel[] = [];

  onAddTodo(newTodo: UserModel): void {
    this.todos.push(newTodo);
  }

}
