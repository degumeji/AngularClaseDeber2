import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Persona } from '../../datasource/Persona.Interface';
import { lpersonas } from '../../datasource/listapersonas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styles: ``
})
export class PersonaComponent {

  constructor(router: Router) {
    const navigation = router.getCurrentNavigation();
    this.email = navigation?.extras.state?.['emailusuario'];
    this.numero = navigation?.extras.state?.['numero'];
  }

  @Input() email: string = '';
  @Input() numero: number = 0;

  dataPersonas: Persona[] = lpersonas;

  funcionExample() {
    this.dataPersonas.toString();
  }

  funcionPersona(persona: Persona) {
    console.log(persona);
  }

  funcionEliminar(persona: any) {
    alert('Hola');
  }

  guardarPersona(persona: Persona) {
    if (persona.id == 0) {
      persona.id = lpersonas.length + 1;
    }
    lpersonas.push(persona);
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
      ].join('')

      alertPlaceholder?.appendChild(wrapper)
    }
    appendAlert()
  }

}
