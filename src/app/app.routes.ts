import { Routes } from '@angular/router';
import { PlayerPageComponent } from './player-page/player-page.component';
import { RoomCodePlayerPageComponent } from './room-code-player-page/room-code-player-page.component';
import {HostPageComponent} from "./host-page/host-page.component";

export const routes: Routes = [
    { path: 'play', component: RoomCodePlayerPageComponent },
    { path: 'play/:id', component: PlayerPageComponent },
    { path: 'host/:quiz', component: HostPageComponent }
];
