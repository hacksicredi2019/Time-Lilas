import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Url } from './common/url';

@Injectable({
  providedIn: 'root'
})
export class EscolasService {

  constructor(private httpClient : HttpClient) { }

  obterEscolas(): Observable<any> {
    return this.httpClient.get<any>(Url.Escolas.Get);
  }

  obterEscolasPeloNome(nome: string): Observable<any> {
    return this.httpClient.get<any>(Url.Escolas.Get + "/" + nome);
  }

  obterEscolasPorId(id: number): Observable<any> {
    return this.httpClient.get<any>(Url.Escola.Get + id);
  }
  
}
