import { Component } from '@angular/core';

@Component({
  selector: 'app-estudo',
  standalone: true,
  imports: [],
  templateUrl: './estudo.component.html',
  styleUrl: './estudo.component.css'
})
export class EstudoComponent {

  nome: String = "Escrito do canal";
  imagem: String = "../../../assets/imagem home studio Aldenor Neto.jpg";
  descricao: String = "imagem do stúdio Aldenor Neto";

  mensagem() {
    alert('estudando event biding');
  }

  alterarImagem(){
if(this.imagem === "../../../assets/imagem home studio Aldenor Neto.jpg"){
  this.imagem ="../../../assets/imagem kenosis.jpeg";
  this.descricao = "imagem Kenôsis";
} else{
  this.imagem = "../../../assets/imagem home studio Aldenor Neto.jpg";
  this.descricao = "imagem do stúdio Aldenor Neto";
}
  }
}
