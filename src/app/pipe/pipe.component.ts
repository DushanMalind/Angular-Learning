import { Component } from '@angular/core';
import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  KeyValuePipe,
  LowerCasePipe,
  NgForOf, NgIf, PercentPipe, SlicePipe,
  UpperCasePipe
} from "@angular/common";
import {AppendPipe} from "./customPipe/append.pipe";

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    DecimalPipe,
    CurrencyPipe,
    DatePipe,
    JsonPipe,
    NgForOf,
    KeyValuePipe,
    NgIf,
    PercentPipe,
    SlicePipe,
    AppendPipe
  ],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  title:string = 'Angular Course';

  count: number=2585464;

  dcValue: number=2.1254;

  price: number= 2524.57885;

  today:Date = new Date();

  postObj: object = {
    id: 1,
    title: 'Angular Course',
    price: 2500,
    date: new Date()
  }

  postArray:Array<string>=['Post 1','Post 2','Post 3','Post 4','Post 5'];

  userDetails={
    name:'John Doe',
    age:25,
    email:'adv@gmail.com'
  }




  constructor() {
  }

}
