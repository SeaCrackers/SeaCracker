import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {EditQuizComponent} from "./pages/edit-quiz/edit-quiz.component";
import {PlayerPageComponent} from './pages/player-page/player-page.component';
import {RoomCodePlayerPageComponent} from './pages/room-code-player-page/room-code-player-page.component';
import {HostPageComponent} from "./pages/host-page/host-page.component";

export const routes: Routes = [
  { path: 'play', component: RoomCodePlayerPageComponent },
  { path: 'play/:id', component: PlayerPageComponent },
  { path: 'host/:id', component: HostPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component:  HomeComponent},
  { path: 'quiz-management/:id/edit', component: EditQuizComponent}
];
