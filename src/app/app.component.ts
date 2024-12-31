import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DocLoginComponent } from "./doc-login/doc-login.component";
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GAC';
}
