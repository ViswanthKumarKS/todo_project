import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  todos: any[] = [];
  newTodo: any = {};
  Add:string='Add'

  addTodo() {
    this.Add='Add'
    if(this.newTodo.name && this.newTodo.phone && this.newTodo.email){}
    this.todos.push({ ...this.newTodo, id: this.todos.length + 1 });
    this.newTodo = {};
  }

  editTodo(id: number) {
    this.Add='Edit'
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      this.newTodo = { ...this.todos[index] };
      this.todos.splice(index, 1);
    }
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
