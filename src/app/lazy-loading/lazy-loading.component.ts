import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-lazy-loading',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './lazy-loading.component.html',
  styleUrl: './lazy-loading.component.css'
})
export class LazyLoadingComponent {

  posts = [
    {
      image:"../../assets/blog1.jpg",
      title:'Writey A.I',
      head:"Most advanced language A.I",
      content:"Writey A.I is an AI tool that generates original, researched blog posts in minutes, provides content\n" +
        "          optimization advice, and works with a plagiarism-free rule.",
      price:"Freemium",
      listOne:"Content Generation,",
      listTwo:"Marketing,",
      listThree:"SEO,",
      listFour:"Writing,",
    },

    {
      image:"../../assets/style4.jpg",
      title:'Writey A.I',
      head:"Most advanced language A.I",
      content:"Writey A.I is an AI tool that generates original, researched blog posts in minutes, provides content\n" +
        "          optimization advice, and works with a plagiarism-free rule.",
      price:"Freemium",
      listOne:"Content Generation,",
      listTwo:"Marketing,",
      listThree:"SEO,",
      listFour:"Writing,",
    },

    {
      image:"../../assets/style5.jpg",
      title:'Writey A.I',
      head:"Most advanced language A.I",
      content:"Writey A.I is an AI tool that generates original, researched blog posts in minutes, provides content\n" +
        "          optimization advice, and works with a plagiarism-free rule.",
      price:"Freemium",
      listOne:"Content Generation,",
      listTwo:"Marketing,",
      listThree:"SEO,",
      listFour:"Writing,",
    }



  ]

}
