import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-from',
  standalone: true,
  imports: [
    FormsModule
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
    });
    console.log(this.userArray);
  }

}
