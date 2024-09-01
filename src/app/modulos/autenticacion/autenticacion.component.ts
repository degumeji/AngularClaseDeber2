import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.component.html',
  styles: ``
})
export class AutenticacionComponent {
  constructor(private router: Router){
  }

  @ViewChild(LoginComponent, {static: false}) 
  loginComponente!: LoginComponent;

  //@ViewChild(RegistrousuarioComponent, { static: false })
  //registroUsuario!: RegistrousuarioComponent;

  private mailUsuario: string = 'vmtdev@mail.com';

  private passUsuario: string = '123456.';

  pantallaPresentacion: string = 'LOGIN';

  mailDefecto = 'cliente@mail.com'

  toggleAutentication(dataCambio: string) {
    console.log(dataCambio);
    this.pantallaPresentacion = dataCambio;
  }

  login() {
    if(this.loginComponente.emailusuario === this.mailUsuario){
      if(this.loginComponente.passwordusuario === this.passUsuario){
        this.router.navigate(['/persona']);
      } else {
        window.alert("Contrasenia incorrecta");
      }
    } else {
      window.alert("Usuario incorrecto");
    }
  }
}
