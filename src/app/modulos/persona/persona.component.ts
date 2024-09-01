import { Component } from '@angular/core';
import { Persona } from '../../datasource/Persona.Interface';
import { lpersonas } from '../../datasource/listapersonas';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styles: ``
})
export class PersonaComponent {
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

  actualizarPersona(persona: Persona) {
    
  }
  guardarPersona(persona: Persona) {
    if(persona.id == 0){
     persona.id =  lpersonas.length +1
    }
    lpersonas.push(persona);
  }
}
