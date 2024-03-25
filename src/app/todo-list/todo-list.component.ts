import {Component, EventEmitter, Output} from '@angular/core';

interface TodoItem {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Output() dataEvent = new EventEmitter<TodoItem[]>();

  sendData() {
    this.dataEvent.emit(this.todos);
  }
  todos: TodoItem[] = [];
  newTodo: string = '';

  addItem() {
    if (this.newTodo.trim() === '') {
      return;
    }
    this.todos.push({ text: this.newTodo, completed: false });
    this.newTodo = '';
    this.sendData();
  }

  removeItem(todo: TodoItem) {
    this.todos = this.todos.filter(item => item !== todo);
    this.sendData();
  }

  toggleItem(todo: TodoItem) {
    todo.completed = !todo.completed;
  }
}
