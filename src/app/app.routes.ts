import { Routes } from '@angular/router';
import { PlayerPageComponent } from './player-page/player-page.component';
import { RoomCodePlayerPageComponent } from './room-code-player-page/room-code-player-page.component';
import {HostPageComponent} from "./host-page/host-page.component";
import {HomeComponent} from "./home/home.component";
import {EditQuizComponent} from "./edit-quiz/edit-quiz.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component:  HomeComponent},
  { path: 'quiz/:id/edit', component: EditQuizComponent },
  { path: 'play', component: RoomCodePlayerPageComponent },
  { path: 'play/:id', component: PlayerPageComponent },
  { path: 'host/:quiz', component: HostPageComponent }
];
