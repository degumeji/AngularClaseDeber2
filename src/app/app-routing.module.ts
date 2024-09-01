import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { AutenticacionComponent } from './modulos/autenticacion/autenticacion.component';
import { PersonaComponent } from './modulos/persona/persona.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AutenticacionComponent },
  { path: 'persona', component: PersonaComponent },
  /*{ path: 'login', 
    loadChildren: () => import('./modulos/autenticacion/autenticacion.module').then(m => m.AutenticacionModule)  
  },
  { path: 'creacion', 
    loadChildren: () => import('./modulos/producto/creacion/creacion.module').then(m => m.CreacionModule)
  },
  { path: 'personas', component: MantenimientoComponent },
  { path: '**', component: NotfoundComponent}*/

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
