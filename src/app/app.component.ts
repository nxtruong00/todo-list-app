import { Component } from '@angular/core';

interface TodoItem {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lists: TodoItem[] = [];
  listColumns: string[] = ["text","completed" ]
  headerColumns: string[] = ["TODO Name", "IsCompleted"];
  receiveData(data: TodoItem[]) {
    this.lists = data;
  }
}
