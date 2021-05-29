import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesGrupoComponent } from './components/detalles-grupo/detalles-grupo.component';
import { ListadoComponent } from './components/listado/listado.component';

const routes: Routes = [
  {path: '', component: ListadoComponent},
  {path: 'grupo/:id', component: DetallesGrupoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
