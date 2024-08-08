import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-estudo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './estudo.component.html',
  styleUrl: './estudo.component.css'
})
export class EstudoComponent {

  cor: boolean = true;
  lista: String[] = ['Aldenor Neto', 'Fabrícia', 'Jônatas', 'Davi'];
  media: number = 3;
  linguagem: String = "php";
  nome: String = "";
}
