import {Component, OnInit} from '@angular/core';
import { PostService } from '../services/post.service'
import {NgForOf} from "@angular/common";
import {PostListComponent} from "../post-list/post-list.component";
@Component({
  selector: 'app-service',
  standalone: true,
  imports: [
    NgForOf,
    PostListComponent
  ],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
  providers: [PostService]
})
export class ServiceComponent implements OnInit{

  posts:Array<any>;

 /* constructor() {
    let postService = new PostService();
    this.posts=postService.postsList;

  }
*/
  //Dependency Injection
  constructor(private postService:PostService) {
    this.posts=postService.postsList;

  }

  addNewData(){
    let newPost =
      {
        //Dynamic Add New Post
        title: 'Post ' + (this.posts.length + 1)+ ' ', content: 'This is the new post' + ' ' +(this.posts.length + 1)

      };
    this.postService.addPost(newPost);
  }
  ngOnInit(): void {
  }

}
