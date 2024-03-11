import { Component } from '@angular/core';
import {PostService} from "../services/post.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
  providers: [PostService]
})
export class PostListComponent {

  postList:Array<any>;
  constructor(private postService:PostService) {
    this.postList=postService.postsList;
  }

}
