import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './modulos/login/login.component';
import { AutenticacionComponent } from './modulos/autenticacion/autenticacion.component';
import { PersonaComponent } from './modulos/persona/persona.component';
import { ModalPersonaComponent } from './modulos/persona/modal-persona/modal-persona.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroPersonaComponent } from './modulos/registro-persona/registro-persona.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AutenticacionComponent,
    PersonaComponent,
    ModalPersonaComponent,
    RegistroPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
