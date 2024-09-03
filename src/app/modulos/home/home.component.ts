import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'  
})
export class HomeComponent {

  constructor(router: Router) {
    const navigation = router.getCurrentNavigation();
    this.email = navigation?.extras.state?.['emailusuario'];
    this.numero = navigation?.extras.state?.['numero'];

    console.log(this.numero);
  }

  @Input() email: string = '';
  @Input() numero: number = 0;

}
