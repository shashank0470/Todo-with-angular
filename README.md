# Todo App

A simple Angular todo application demonstrating core Angular concepts.

## Features

- Add new todos
- Mark todos as complete/incomplete
- Delete todos
- Clean and responsive UI

## Technologies Used

- Angular (Standalone Components)
- TypeScript
- HTML/CSS

## Angular Concepts Demonstrated

- Components (TypeScript, HTML, CSS)
- Two-way data binding with `[(ngModel)]`
- Event binding `(click)`, `(keyup.enter)`
- Structural directives `*ngFor`, `*ngIf`
- Property binding `[checked]`, `[class]`

## Prerequisites

- Node.js installed
- Angular CLI installed (`npm install -g @angular/cli`)

## Installation

1. Clone the repository
```bash
git clone https://github.com/shashank0470/Todo-with-angular.git
cd Todo-with-angular
```

2. Install dependencies
```bash
npm install
```

3. Run the application
```bash
ng serve
```

4. Open browser at `http://localhost:4200`

## Project Structure

```
src/
├── app/
│   ├── app.component.ts      # Component logic
│   ├── app.component.html    # Component template
│   └── app.component.css     # Component styles
└── main.ts                   # Application entry point
```

## Usage

- Type a todo in the input field and press Enter or click Add
- Click the checkbox to mark a todo as complete
- Click Delete to remove a todo

