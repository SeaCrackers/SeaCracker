import { Routes } from '@angular/router';
import { RoomPlayerPageComponent } from './room-player-page/room-player-page.component';
import { RoomCodePlayerPageComponent } from './room-code-player-page/room-code-player-page.component';
import {HostPageComponent} from "./host-page/host-page.component";

export const routes: Routes = [
    { path: 'play', component: RoomCodePlayerPageComponent },
    { path: 'play/:id', component: RoomPlayerPageComponent },
    { path: 'host/:quiz', component: HostPageComponent }
];
