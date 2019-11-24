import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DetalhesComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DetalhesModule { }
