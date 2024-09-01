import { Component,EventEmitter,Output } from '@angular/core';

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
}
