import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  postTitle!: string;
  postContent!: string;
  imageUrl!: string;
  postUrl!: string;
  addBackground!: boolean;
}
