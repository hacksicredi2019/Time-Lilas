import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { HeaderComponent } from './common/header/header.component';
import { RouterModule } from '@angular/router';

import { CardInfoComponent } from './common/card-info/card-info.component';
import { HttpClientModule }    from '@angular/common/http';

import { AgmCoreModule } from '@agm/core';
import { MapaComponent } from './mapa/mapa/mapa.component';
import { MapaModule } from './mapa/mapa.module';

import { DetalhesComponent } from './detalhes/detalhes/detalhes.component';
import { DetalhesModule } from './detalhes/detalhes.module';

import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { ComplementoComponent } from './chat-bot/complemento/complemento.component';
import { PerguntaComponent } from './chat-bot/pergunta/pergunta.component';
import { FormularioEscolaComponent } from './formulario-escola/formulario-escola.component';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import { ProfessorComponent } from './professor/professor.component';


@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    HeaderComponent,
    CardInfoComponent,
    ChatBotComponent,
    ComplementoComponent,
    PerguntaComponent,
    FormularioEscolaComponent,
    AvaliacaoComponent,
    ProfessorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MapaModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBf4N8Hrd4ZIyf9akTdT34HTrFYWZ33qwY',
      libraries: ['geometry']
    }),
    HttpClientModule,
    DetalhesModule,
    RouterModule.forRoot([
    {path:"",component:TelaLoginComponent},
    {path:"header",component:HeaderComponent},
    {path:"detalhes/:id", component:DetalhesComponent},
    {path:"mapa",component:MapaComponent},
    {path:"chat",component:ChatBotComponent},
    {path:"escola",component:FormularioEscolaComponent},
    {path:"avaliacao",component:AvaliacaoComponent},
    {path:"formularioEscola",component:FormularioEscolaComponent},
    {path:"avaliacao/professor", component:ProfessorComponent,outlet:"tabs"}
  ]),
  HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
