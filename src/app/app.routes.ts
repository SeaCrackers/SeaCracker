import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {EditQuizComponent} from "./edit-quiz/edit-quiz.component";

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component:  HomeComponent},
  {path: 'quiz/:id/edit', component: EditQuizComponent}
];
