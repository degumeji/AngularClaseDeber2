import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Persona } from '../../../datasource/Persona.Interface';

@Component({
  selector: 'app-modal-persona',
  templateUrl: './modal-persona.component.html',
  styles: ``
})
export class ModalPersonaComponent {
  @Input()
  modalid: string = 'modalPersona';

  @Input()
  nombreBoton: string = 'Nuevo';

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
  
  @Output() eventoGuardar = new EventEmitter<Persona>();

  guardar() {
    if (!this.validarGuardar()) {
      this.eventoGuardar.emit(this.dataPersona);
      this.cerrarModal();
    }
  }

  validarGuardar(): boolean {
    if (this.validarEstaVacio(this.dataPersona.celular)) {
      this.mostrarMensajeError("El valor de celular no se ha agregado");
      return true;
    }
    return false;
  }

  cerrarModal() {
    let btnCerrar = document.getElementById('btnCerrarModal');
    if (btnCerrar) {
      btnCerrar?.click();
    }
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
