import { Component, OnInit, Input } from '@angular/core';
import { RetornoPesquisa } from '../_infra/model/retorno-pesquisa';
import { RetornoPesquisaService } from '../_infra/retorno-pesquisa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss']
})
export class ChatBotComponent implements OnInit {
//mensagem : string;

retornoPesquisa = new RetornoPesquisa()
 mensagens : any;
 contador : number;
 mensagem : any;

 resultadoAlimentacao:string;
 resultadoSeguranca:string;
 resultadoQualidade:string;
 resultadoInfraestrutura:string;
 resultadoLocalizacao:string;
 resultadoAvaliacaoPessoas:string;

 clicou0 : boolean = false;
 clicou1 : boolean = false;
 clicou2 : boolean = false;
 clicou3 : boolean = false;
 clicou4 : boolean = false;
 clicou5 : boolean = false;
 clicou6 : boolean = false;


 constructor(private retornopesquisaService : RetornoPesquisaService, private _router: Router) { }



  ngOnInit() {
    this.resultadoAlimentacao = '';
    this.resultadoSeguranca= '';
    this.resultadoQualidade= '';
    this.resultadoInfraestrutura= '';
    this.resultadoLocalizacao= '';
    this.resultadoAvaliacaoPessoas= '';

  }

  direcionaPerguntas(value : string){
    this.clicou0 = true;
     this.resultadoAlimentacao += value + "+";
   }

retornoPergunta1(value : string){
 this.clicou1 = true;
  this.resultadoAlimentacao += value + "+";
}

retornoPergunta2(value: string){
  this.clicou2 = true;
  this.resultadoSeguranca += value + "+";

}
retornoPergunta3(value: string){
  this.clicou3 = true;
  this.resultadoQualidade += value + "+";

}
retornoPergunta4(value: string){
  this.clicou4 = true;
  this.resultadoInfraestrutura += value + "+";

}
retornoPergunta5(value: string){
  this.clicou5 = true;
  this.resultadoLocalizacao += value + "+";

}
retornoPergunta6(value: string){
  this.clicou5 = true;
  this.resultadoAvaliacaoPessoas += value + "+";
  this.geraResultadoPesquisa();

}

vaiMapa(){
  this._router.navigate(["/mapa"]);
}

geraResultadoPesquisa(){
  this.retornoPesquisa.retornoPesquisaAlimentacao = this.resultadoAlimentacao;
  this.retornoPesquisa.retornoPesquisaSeguranca = this.resultadoSeguranca;
  this.retornoPesquisa.retornoPesquisaQualidade = this.resultadoQualidade;
  this.retornoPesquisa.retornoPesquisaInfraestrutura = this.resultadoInfraestrutura;
  this.retornoPesquisa.retornoPesquisaLocalizacao = this.resultadoLocalizacao;
  this.retornoPesquisa.retornoPesquisaOpiniao = this.resultadoAvaliacaoPessoas;

  this._router.navigate(["./mapa"]);
}

salvaPesquisaParcial(){
  this._router.navigate(["./mapa"]);
}

direcionaEscola(){
  this._router.navigate(["./formularioEscola"]);
}
}
