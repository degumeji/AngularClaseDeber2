import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Persona } from '../../datasource/Persona.Interface';
import { lpersonas } from '../../datasource/listapersonas';

@Component({
  selector: 'app-registro-persona',
  templateUrl: './registro-persona.component.html',
  styles: ``
})
export class RegistroPersonaComponent {
  @Output() eventoVolverInicio = new EventEmitter<string>();

  volverInicio() {
    this.eventoVolverInicio.emit('LOGIN');
  }

  dataPersonas: Persona[] = lpersonas;

  @Input()
  dataPersona: Persona = {
    id: 0,
    identificacion: '',
    nombres: '',
    apellidos: '',
    edad: 0,
    celular: '',
    email: '',
    password: ''
  };

  guardar(persona: Persona) {
    if (!this.validarGuardar()) {
      if (persona.id == 0) {
        persona.id = lpersonas.length + 1;
      }
      lpersonas.push(persona);
  
      this.mostrarMensajeExito("Se grabó correctamente!");
    }
  }

  validarGuardar(): boolean {
    if (this.validarEstaVacio(this.dataPersona.celular)) {
      this.mostrarMensajeError("El valor de celular no se ha agregado");
      return true;
    }
    return false;
  }

  validarEstaVacio(value: any) {
    return value.lenght == 0 || value === '' || value === undefined || value == null;
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
