import { Component,Input } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
 name = '';

  constructor(private dataService: DataService) {

    this.dataService.userName.subscribe(
      data => this.name = data
    );

  }
}
