import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaisRoutingModule } from './animais-routing.module';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { HeaderModule } from '../componentes/header/header.module';


@NgModule({
  declarations: [
    ListaAnimaisComponent
  ],
  imports: [
    CommonModule,
    AnimaisRoutingModule,
    HeaderModule,
  ]
})
export class AnimaisModule { }
