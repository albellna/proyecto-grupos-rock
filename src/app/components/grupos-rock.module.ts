import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { GruposComponent } from './grupos/grupos.component';
import { DetallesGrupoComponent } from './detalles-grupo/detalles-grupo.component';


@NgModule({
  declarations: [
    ListadoComponent,
    GruposComponent,
    DetallesGrupoComponent
  ],
  exports: [
    ListadoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GruposRockModule { }
