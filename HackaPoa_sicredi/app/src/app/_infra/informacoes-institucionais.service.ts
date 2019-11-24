import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Url } from './common/url';

@Injectable({
  providedIn: 'root'
})
export class InformacoesInstitucionaisService {

  constructor(private httpClient : HttpClient) { }

  getInformacoesInstitucionais(id:number): Observable<any> {
    return this.httpClient.get<any>(Url.InformacoesInstitucionais.Get + id);
  }
}
