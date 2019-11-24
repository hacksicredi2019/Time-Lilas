import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RetornoPesquisa } from './model/retorno-pesquisa';
import { Url } from './common/url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RetornoPesquisaService {

  constructor(private httpClient:HttpClient) { }

  cadastraEscola( pesquisa : RetornoPesquisa):Observable<any>{
    return this.httpClient.post<any>(Url.Pesquisa.Cadastro, pesquisa);
  }

}
