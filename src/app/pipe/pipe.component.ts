import { Component } from '@angular/core';
import {DecimalPipe, LowerCasePipe, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    DecimalPipe
  ],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  title:string = 'Angular Course';

  count: number=2585464;

  dcValue: number=2.1254;

  constructor() {
  }

}
