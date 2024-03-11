import { Component } from '@angular/core';
import {FormControl, FormsModule, NgForm, NgModel} from "@angular/forms";
import {NgClass, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-from',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    NgClass
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


/*ngForm*/

  onSubmit(f: NgForm){
    console.log(f.value);
  }

  getValue(f: NgModel){
    console.log(f);
  }

}
