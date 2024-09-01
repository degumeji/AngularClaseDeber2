import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {
  constructor(){
  }


  @Output()
  banderaAutenticacion = new EventEmitter<string>();

  @Output() loginEvent = new EventEmitter();

  @Input()
  valorData?: string;

  labelLogin: string = 'LOGIN';
  emailusuario: string = ''; // two way binging
  passwordusuario: string = '';

  mostrarNombre() {
  }

  eventoCambioPantalla(){
    this.banderaAutenticacion.emit("REGISTRO");
  }

  login() {
    this.loginEvent.emit();
  }
}
