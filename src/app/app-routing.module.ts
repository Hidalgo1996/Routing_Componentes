import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './components/listar/listar.component';
import { EditarComponent } from './components/editar/editar.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { EliminarComponent } from './components/eliminar/eliminar.component';

//Ruteo
const routes: Routes = [
  { path: '', redirectTo:  'listar', pathMatch: 'full'},
  { path: 'listar', component: ListarComponent},
  { path: 'editar', component: EditarComponent},
  { path: 'regis', component: RegistrarComponent},
  { path: 'eliminar', component: EliminarComponent},
  { path: '**', redirectTo: 'listar', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
