import {Component, OnInit,SimpleChanges,Input} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent  {

  title: string = 'Post title'

  @Input() fromParent!: string;

  constructor() {
    console.log('Constructor called');
  }

    ngOnInit(): void {

    }

}
