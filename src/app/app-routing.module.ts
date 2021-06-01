import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesGrupoComponent } from './components/detalles-grupo/detalles-grupo.component';
import { GruposComponent } from './components/grupos/grupos.component';
import { CrearGrupoComponent } from './components/crear-grupo/crear-grupo.component';
import { ModificarGrupoComponent } from './components/modificar-grupo/modificar-grupo.component';

const routes: Routes = [
  {path: '', component: GruposComponent},
  {path: 'grupo/:id', component: DetallesGrupoComponent},
  {path: 'creargrupo', component: CrearGrupoComponent},
  {path: 'modificargrupo/:id', component: ModificarGrupoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
