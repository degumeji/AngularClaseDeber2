import { Component, EventEmitter, ViewChild, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'  
})
export class HeaderComponent {  

  @Input()
  titulo: String = "Home VmtDevNg"; 

  @Input()
  email: string = "";

  @Input() numero: number = 0;

}
