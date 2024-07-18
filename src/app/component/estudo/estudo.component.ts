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

cor: boolean = true;
lista: String[] = ['Aldenor Neto', 'Fabrícia', 'Jônatas', 'Davi'];
media: number = 3;

}
