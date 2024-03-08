import { Component } from '@angular/core';
import {JsonPipe, NgForOf, NgIf, NgStyle, NgSwitch, NgSwitchCase} from "@angular/common";

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [
    NgForOf,
    JsonPipe,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgStyle
  ],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {

  /*NgFor Directive*/
  postArray:Array<string>=['Post 1','Post 2','Post 3','Post 4','Post 5'];

  /*Fetch Object Array NgFor*/

  objArray:Array<any>=[
    {id:1,names:'Obj Post 1'},
    {id:2,names:'Obj Post 2'},
    {id:3,names:'Obj Post 3'},
    {id:4,names:'Obj Post 4'},
    {id:5,names:'Obj Post 5'}
  ];

  /*ng SwitchCase*/
  stepForm!: string;

  isActive:boolean=true;

  constructor() {
    for (let i = 0; i < this.postArray.length; i++) {
      console.log(this.postArray[i]);
    }
  }

  addNew(){
    //this.objArray.push({id:6,names:'Obj Post 6'});

    //Dynamic Add New Post
    this.objArray.push({ id: this.objArray.length + 1, names: 'Obj Post ' + (this.objArray.length + 1) });
  }

  /*Delete Use post Attributes*/
 /* onDelete(post:any){
    /!*this.objArray.splice(post,1);*!/
    let index = this.objArray.indexOf(post);
    this.objArray.splice(index,1);
  }*/

  /*Delete Use post index number*/
  onDelete(index: number){
    /*let index = this.objArray.indexOf(post);*/
    this.objArray.splice(index,1);
  }


  /*Ng SwitchCase*/
  onClick(status: any){
    this.stepForm = status;
  }
}
