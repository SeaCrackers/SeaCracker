import { Routes } from '@angular/router';
import { RoomPlayerPageComponent } from './room-player-page/room-player-page.component';
import { RoomCodePlayerPageComponent } from './room-code-player-page/room-code-player-page.component';

export const routes: Routes = [
    { path: 'room', component: RoomCodePlayerPageComponent },
    { path: 'room/:id', component: RoomPlayerPageComponent }
];
