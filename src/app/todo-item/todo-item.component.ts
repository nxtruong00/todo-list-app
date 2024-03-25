import { Component, EventEmitter, Input, Output } from '@angular/core';

interface TodoItem {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: TodoItem;
  @Output() remove = new EventEmitter<TodoItem>();
  @Output() toggle = new EventEmitter<TodoItem>();
}
