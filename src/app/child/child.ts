import { Component,EventEmitter,Input, Output } from '@angular/core';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
 @Output() sendData = new EventEmitter<string>();

  sendToParent() {
    this.sendData.emit('Hello Parent');
  }
}
