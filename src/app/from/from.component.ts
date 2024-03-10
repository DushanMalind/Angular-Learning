import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-from',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './from.component.html',
  styleUrl: './from.component.css'
})
export class FromComponent {
  name!: string;
  email!: string;
  feedback!: string;

  userArray: Array<any> = [];

  constructor() {
  }

  onClick(){
    this.userArray.push({
      "name": this.name,
      "email": this.email,
      "feedback": this.feedback
     /*  name: this.name,
       email: this.email,
      feedback: this.feedback*/
    });
    console.log(this.userArray);
    /*window.location.href = "/home";*/
  }

  onDelete(index: number){
    /*this.userArray.pop();*/
    this.userArray.splice(index, 1);

  }
  /*if(){
    window.location.href = "https://www.google.com";
  }*/
}
