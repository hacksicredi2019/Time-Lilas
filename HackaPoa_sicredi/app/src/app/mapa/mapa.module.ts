import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaComponent } from './mapa/mapa.component';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { CardEscolaComponent } from '../common/card-escola/card-escola.component';

@NgModule({
  declarations: [MapaComponent, CardEscolaComponent],
  imports: [
    CommonModule,
    AgmCoreModule
  ],
  exports: [ MapaComponent ]
})
export class MapaModule { }
