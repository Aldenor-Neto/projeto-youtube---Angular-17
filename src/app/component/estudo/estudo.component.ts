import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-estudo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estudo.component.html',
  styleUrl: './estudo.component.css'
})
export class EstudoComponent {

cor: boolean = false;
lista: String[] = ['aprovado', 'reprovado', 'aprovado', 'reprovado'];

}
