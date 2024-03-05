import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

export const routes: Routes = [
  { path: 'home', 'title': "Home", component: HomeComponent },
  { path: 'about', 'title': "About", component: AboutComponent },
  { path: '', redirectTo: "/home", pathMatch: "full" },
  {path: '**', component: PageNotFoundComponent}
];
