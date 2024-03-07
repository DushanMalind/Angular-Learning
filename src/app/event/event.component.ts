import { Component } from '@angular/core';
import {JsonPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [
    NgForOf,
    JsonPipe
  ],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {

  /*NgFor Directive*/
  postArray:Array<string>=['Post 1','Post 2','Post 3','Post 4','Post 5'];

  /*Fetch Object Array*/

  objArray:Array<object>=[
    {id:1,name:'Obj Post 1'},
    {id:2,name:'Obj Post 2'},
    {id:3,name:'Obj Post 3'},
    {id:4,name:'Obj Post 4'},
    {id:5,name:'Obj Post 5'}
  ];


  constructor() {
    for (let i = 0; i < this.postArray.length; i++) {
      console.log(this.postArray[i]);
    }
  }
}
