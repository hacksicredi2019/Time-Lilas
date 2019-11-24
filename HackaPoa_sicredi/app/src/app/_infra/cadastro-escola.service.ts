import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Escola } from '../models/escola';
import { Observable } from 'rxjs';
import { Url } from './common/url';

@Injectable({
  providedIn: 'root'
})
export class CadastroEscolaService {

  constructor(private httpClient:HttpClient) { }

  cadastraEscola( escola : Escola):Observable<Escola>{
    return this.httpClient.post<any>(Url.Escolas.Cadastro, escola);
  }

}
