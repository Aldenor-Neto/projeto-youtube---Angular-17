import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EstudoComponent } from "./component/estudo/estudo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EstudoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'estudos';
}
