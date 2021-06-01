import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GruposComponent } from './grupos/grupos.component';
import { DetallesGrupoComponent } from './detalles-grupo/detalles-grupo.component';
import { BarraBusquedaComponent } from './barra-busqueda/barra-busqueda.component';
import { CrearGrupoComponent } from './crear-grupo/crear-grupo.component';
import { FormsModule } from '@angular/forms';
import { ModificarGrupoComponent } from './modificar-grupo/modificar-grupo.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    GruposComponent,
    DetallesGrupoComponent,
    BarraBusquedaComponent,
    CrearGrupoComponent,
    ModificarGrupoComponent,
    FooterComponent
  ],
  exports: [
    GruposComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class GruposRockModule { }
