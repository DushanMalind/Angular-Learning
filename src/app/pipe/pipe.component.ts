import { Component } from '@angular/core';
import {UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [
    UpperCasePipe
  ],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  title:string = 'Angular Course';

  constructor() {
  }

}
