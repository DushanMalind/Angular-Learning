import {Component, OnInit} from '@angular/core';
import { PostService } from '../services/post.service'
import {NgForOf} from "@angular/common";
@Component({
  selector: 'app-service',
  standalone: true,
  imports: [
    NgForOf
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

  ngOnInit(): void {
  }

}
