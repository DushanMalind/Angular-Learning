import {Injectable} from "@angular/core";

export class PostService{

 /* @Injectable({
    providedIn: 'root'
  })*/

  postsList:Array<any>=[
{
      title: "Post 1",
      content: "This is the first post"
    },
    {
      title: "Post 2",
      content: "This is the second post"
    },

    {
      title: "Post 3",
      content: "This is the third post"
    },
    {
      title: "Post 4",
      content: "This is the fourth post"
    }

  ];


  addPost(data: { title: string }){
    this.postsList.push(data);
  }

  constructor() { }

}
