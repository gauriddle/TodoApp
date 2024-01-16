import { Component } from '@angular/core';
import { UserModel } from '../user-model';


import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { UserTaskComponent } from '../user-task/user-task.component';

@Component({
  selector: 'app-user-task-list',
  templateUrl: './user-task-list.component.html',
  styleUrl: './user-task-list.component.scss'
})
export class UserTaskListComponent {
  todos: UserModel[] = [];

  constructor(public dialog: MatDialog) {}

  onAddTodo(newTodo: UserModel): void {
    this.todos.push(newTodo);
  }

  openDialog():void{
    let dialog = this.dialog.open(UserTaskComponent);
  }

}
