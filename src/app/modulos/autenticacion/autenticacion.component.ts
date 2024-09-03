import { Component, ViewChild, Output, EventEmitter, input, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { PersonaComponent } from '../persona/persona.component';
import { lpersonas } from '../../datasource/listapersonas';
import { Persona } from '../../datasource/Persona.Interface';

@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.component.html',
  styles: ``
})
export class AutenticacionComponent {

  constructor(private router: Router) { }

  @Input() UsuarioConectado: string = '';
  @ViewChild(LoginComponent, { static: false }) loginComponente!: LoginComponent;

  private mailUsuario: string = 'vmtdev@mail.com';
  private passUsuario: string = '123456.';
  public pantallaPresentacion: string = 'LOGIN';
  public mailDefecto = 'cliente@mail.com';

  toggleAutentication(dataCambio: string) {
    this.pantallaPresentacion = dataCambio;
  }

  dataPersonas: Persona[] = lpersonas;
  persona: any | undefined;
  usuarioIncorrecto: string = "Usuario incorrecto";
  passwordIncorrecto: string = "Contrasenia incorrecta";

  login() {

    if (this.loginComponente.emailusuario === 'default' && this.loginComponente.passwordusuario === 'default') {

      this.UsuarioConectado = this.passUsuario;
      this.router.navigate(['/home'],
        {
          state: {
            emailusuario: this.mailUsuario,
            passwordusuario: this.passUsuario,
            numero: 1
          }
        }
      );

    } else {

      this.persona = this.dataPersonas.find(persona =>
      (persona.email === this.loginComponente.emailusuario
        && persona.password === this.loginComponente.passwordusuario)
      );

      if (this.persona === undefined || this.persona === null) {
        this.mostrarMensajeAlerta(this.usuarioIncorrecto);
      } else {
        if (this.persona.email === this.loginComponente.emailusuario) {
          if (this.persona.password === this.loginComponente.passwordusuario) {

            this.UsuarioConectado = this.persona.password;
            this.router.navigate(['/home'],
              {
                state: {
                  emailusuario: this.persona.email,
                  passwordusuario: this.persona.password,
                  numero: 1
                }
              }
            );

          } else {
            this.mostrarMensajeError(this.passwordIncorrecto);
          }
        } else {
          this.mostrarMensajeAlerta(this.usuarioIncorrecto);
        }
      }

    }
  }

  mostrarMensajeError(message: string) {
    this.mostrarMensajeBase(message, 'danger');
  }

  mostrarMensajeExito(message: string) {
    this.mostrarMensajeBase(message, 'success');
  }

  mostrarMensajeAlerta(message: string) {
    this.mostrarMensajeBase(message, 'warn');
  }

  mostrarMensajeBase(message: string, type: string) {
    const alertPlaceholder = document.getElementById('divMensaje')
    const appendAlert = () => {
      const wrapper = document.createElement('div')
      wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
      ].join('');

      alertPlaceholder?.appendChild(wrapper);
    }
    appendAlert();
  }
}
