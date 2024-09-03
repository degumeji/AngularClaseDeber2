import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AutenticacionComponent } from './modulos/autenticacion/autenticacion.component';
import { PersonaComponent } from './modulos/persona/persona.component';
import { HomeComponent } from './modulos/home/home.component';
import { NotfoundComponent } from './modulos/general/notfound/notfound.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AutenticacionComponent },
  { path: 'home', component: HomeComponent },
  { path: 'persona', component: PersonaComponent },
  { path: '**', component: NotfoundComponent}

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
