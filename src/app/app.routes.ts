import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {PostComponent} from "./post/post.component";
import {EventComponent} from "./event/event.component";

export const routes: Routes = [
  { path: 'home', 'title': "Home", component: HomeComponent },
  { path: 'about', 'title': "About", component: AboutComponent },
  { path: 'contact', 'title': "contact", component: PostComponent },
  { path: 'event', 'title': "contact", component: EventComponent },
  { path: '', redirectTo: "/home", pathMatch: "full" },
  {path: '**', component: PageNotFoundComponent}
];
