import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {EditQuizComponent} from "./edit-quiz/edit-quiz.component";
import {PlayerPageComponent} from './player-page/player-page.component';
import {RoomCodePlayerPageComponent} from './room-code-player-page/room-code-player-page.component';
import {HostPageComponent} from "./host-page/host-page.component";

export const routes: Routes = [
  { path: 'play', component: RoomCodePlayerPageComponent },
  { path: 'play/:id', component: PlayerPageComponent },
  { path: 'host/:id', component: HostPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component:  HomeComponent},
  { path: 'quiz/:id/edit', component: EditQuizComponent}
];
