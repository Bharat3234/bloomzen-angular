import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})

export class ServicesComponent {

  variableOfServices = 9;

  @Output() clickEvent = new EventEmitter();

  constructor() {}

  passDataToParent () {
    this.clickEvent.emit(this.variableOfServices);
    // alert('Alert from child');
  }

}
