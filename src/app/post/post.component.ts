import {Component, OnInit,SimpleChanges,Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [RouterLink, HomeComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent  {

  title: string = 'Post title';

  postParentMessage = "message from post parent";

  @Input() fromParent!: string;

  constructor() {
    console.log('Constructor called');
  }

    ngOnInit(): void {

    }

  onClick() {
    this.postParentMessage = 'Message from post child';
    console.log('Button clicked');
  }
}
