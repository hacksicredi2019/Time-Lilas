import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EscolasService } from 'src/app/_infra/escolas.service';
import { InformacoesInstitucionaisService } from 'src/app/_infra/informacoes-institucionais.service';
import { Escola } from 'src/app/models/escola';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
    private _features: InformacoesInstitucionaisService,
    private _escolaService: EscolasService,
    private router:Router) { }

  detalhes: any;
  escola: Escola;

  ngOnInit() {
    this.escola = new Escola();
    
    this.route.paramMap.subscribe(params => {
      let id = Number(params.get('id'));
      this._escolaService.obterEscolasPorId(id).subscribe(c =>{
        this.escola = c;
      });
      this._features.getInformacoesInstitucionais(id).subscribe(c =>{
          this.detalhes = c;
      });
    });
  }

  voltar() {
    this.router.navigate(["/mapa"]);
  }

}
