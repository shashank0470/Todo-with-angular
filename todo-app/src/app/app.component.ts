import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo App';
  newTodo = '';
  todos: Todo[] = [];
  nextId = 1;

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push({
        id: this.nextId++,
        text: this.newTodo,
        completed: false
      });
      this.newTodo = '';
    }
  }

  toggleTodo(todo: Todo) {
    todo.completed = !todo.completed;
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}