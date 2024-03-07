import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
  postArray:Array<string>=['Post 1','Post 2','Post 3','Post 4','Post 5'];
}
