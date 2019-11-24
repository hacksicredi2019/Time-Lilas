import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complemento',
  templateUrl: './complemento.component.html',
  styleUrls: ['./complemento.component.scss']
})
export class ComplementoComponent implements OnInit {
  @Input () mensagem;
  @Input() index;
  

  constructor(private router:Router) { }

  ngOnInit() {
    //this.mensagem = "Olá, somos o app EducaJuntos. Aqui você irá encontrar a melhor escolha para seu filho."
  }
  geraNovaMensagem(i){
    // this.mensagem = this.mensagens[i];
    // console.log(this.mensagens)
  }

  direcionaEscola(){
    this.router.navigate(["/escola"]);
  }
  direionarResponsavel(){
    
  }

}
