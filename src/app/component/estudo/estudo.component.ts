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

  peso: number = 0;
  altura: number = 0;
  imc: number = 0;
  mensagem: String = "";

  calculaImc() {
    this.imc = this.peso / (this.altura * this.altura);
    this.imc = + this.imc.toFixed(1);

    if(this.imc < 18.5){
      this.mensagem = "desnutrição!";
    } else if (this.imc <25){
      this.mensagem = "peso ideal!";
    } else if (this.imc <30){
      this.mensagem = "sobre-peso!";
    } else {
      this.mensagem = "obesidade!";
    }
  }

  novoCalculo(){
this.peso = 0;
this.altura = 0;
this.imc = 0;
this.mensagem = "";
  }
}
