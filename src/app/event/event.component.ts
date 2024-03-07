import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {

  /*NgFor Directive*/
  postArray:Array<string>=['Post 1','Post 2','Post 3','Post 4','Post 5'];

  constructor() {
    for (let i = 0; i < this.postArray.length; i++) {
      console.log(this.postArray[i]);
    }
  }
}
