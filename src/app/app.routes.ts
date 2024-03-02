import { Routes } from '@angular/router';
import { RoomPlayerPageComponent } from './room-player-page/room-player-page.component';

export const routes: Routes = [
    { path: 'room/:id', component: RoomPlayerPageComponent }
];
