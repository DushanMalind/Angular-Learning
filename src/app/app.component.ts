import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MainComponent} from "./main/main.component";
// @ts-ignore
import {NavbarComponent} from "./navbar/navbar.component";
import {HomeComponent} from "./home/home.component";
import {PostComponent} from "./post/post.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, PostComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
/*  title = 'My First Angular App';
  parentMessage = "message from parent";*/
}
