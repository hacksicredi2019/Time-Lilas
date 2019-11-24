import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-escola',
  templateUrl: './formulario-escola.component.html',
  styleUrls: ['./formulario-escola.component.scss']
})
export class FormularioEscolaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  voltar() {
    this.router.navigate([""]);
  }

}
