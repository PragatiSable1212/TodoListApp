import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from '../Component/todoComponent';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TodoComponent,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'AngularAppTodoList';
}
