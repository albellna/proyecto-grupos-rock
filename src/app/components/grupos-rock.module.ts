import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { GruposComponent } from './grupos/grupos.component';



@NgModule({
  declarations: [
    ListadoComponent,
    GruposComponent
  ],
  exports: [
    ListadoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GruposRockModule { }
