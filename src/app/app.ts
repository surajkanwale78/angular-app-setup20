import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './child/child';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-app-setup20');
  
  constructor(private dataService: DataService) {}
  updateName() {
    this.dataService.userName.next('Suraj');
  }
}
