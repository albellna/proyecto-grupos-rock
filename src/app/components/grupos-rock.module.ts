import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { GruposComponent } from './grupos/grupos.component';
import { DetallesGrupoComponent } from './detalles-grupo/detalles-grupo.component';
import { BarraBusquedaComponent } from './barra-busqueda/barra-busqueda.component';


@NgModule({
  declarations: [
    ListadoComponent,
    GruposComponent,
    DetallesGrupoComponent,
    BarraBusquedaComponent
  ],
  exports: [
    ListadoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GruposRockModule { }
