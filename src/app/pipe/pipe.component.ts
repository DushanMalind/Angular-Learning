import { Component } from '@angular/core';
import {CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    DecimalPipe,
    CurrencyPipe,
    DatePipe,
    JsonPipe
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

  constructor() {
  }

}
