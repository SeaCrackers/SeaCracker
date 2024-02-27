import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HostPageComponent} from "./host-page/host-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HostPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SeaCrackers';
}
