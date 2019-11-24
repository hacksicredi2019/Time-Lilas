import { environment } from 'src/environments/environment';

export const baseApi = { url: environment.baseUrl }

export const Url = {
    
  InformacoesInstitucionais: {
        Get: baseApi.url + 'features/',
      },
  Escolas: {
        Get: baseApi.url + 'schools/',
        Cadastro: baseApi.url + 'schools/post',
      },
  Escola: {
        Get: baseApi.url + 'school/',
      },
  Pesquisa:{
        Cadastro: baseApi.url + 'pesquisa/post'
      }
}