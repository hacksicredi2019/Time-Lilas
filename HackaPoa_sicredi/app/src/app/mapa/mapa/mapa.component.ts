import { Component, OnInit } from '@angular/core';
import { Escola } from 'src/app/models/escola';
import { EscolasService } from 'src/app/_infra/escolas.service';
import {} from 'googlemaps';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  lat: number = -30.0277;
  long: number = -51.2287;
  mensagemErro: any;
  escolas: Escola[];
  detalhesEscola: string;

  constructor(private _escolaService: EscolasService, private router:Router) { 
    this._escolaService.obterEscolasPeloNome("amigo")
    .subscribe(
        esc => {
          this.escolas = esc
        },
        error => this.mensagemErro = error 
    );
  }

  ngOnInit() {
  }

  clickedMarker(label: string) {
    this.detalhesEscola = label;
  }

  calculateDistance() {
    const latLong = new google.maps.LatLng(19.432608, -99.133209);
    const latLong2 = new google.maps.LatLng(40.730610, -73.935242);
    const distance = google.maps.geometry.spherical.computeDistanceBetween(latLong, latLong2); // distância em metros
  }

  voltar() {
    this.router.navigate(['']);
  }
  
}
