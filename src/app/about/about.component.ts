import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  @ViewChild('postTitleElement') postTitleElement: ElementRef | undefined;
  @ViewChild('postContentElement') postContentElement: ElementRef | undefined;
  @ViewChild('imageUrlElement') imageUrlElement: ElementRef | undefined;
  @ViewChild('postUrlElement') postUrlElement: ElementRef | undefined;

  showForm: boolean = true;
  postTitle!: string;
  postContent!: string;
  imageUrl!: string;
  postUrl!: string;
  addBackground!: boolean;

  onSubmit() {


      console.log("Form submitted!");
      console.log("Post Title:", this.postTitle);
      console.log("Post Content:", this.postContent);
      console.log("Image URL:", this.imageUrl);
      console.log("Post URL:", this.postUrl);
      console.log("Add Background:", this.addBackground);

    /*document.getElementById("post-title")!.innerHTML = this.postTitle;
    document.getElementById("post-content")!.innerHTML = this.postContent;
    document.getElementById("post-image")!.setAttribute("src", this.imageUrl);
    document.getElementById("post-link")!.setAttribute("href", this.postUrl);*/


    // @ts-ignore
    this.postTitleElement.nativeElement.textContent = this.postTitle;
    // @ts-ignore
    this.postContentElement.nativeElement.textContent = this.postContent;
    // @ts-ignore
    this.imageUrlElement.nativeElement.setAttribute('src', this.imageUrl);
    // @ts-ignore
    this.postUrlElement.nativeElement.setAttribute('href', this.postUrl);

    // Toggle showForm to switch between the form and post view
    this.showForm = false;

    this.postTitle = '';
    this.postContent = '';
    this.imageUrl = '';
    this.postUrl = '';
    this.addBackground = false;


  }
}
