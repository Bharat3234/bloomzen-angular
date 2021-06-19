import { Component } from '@angular/core'; // to import in typescript

// var component = require('@angular/core'); // to import in javascript

@Component({
  selector: 'app-root', // name of component
  templateUrl: './app.component.html',
  // template: '<h1>Welcome</h1><br/><h2>to Angular</h2>',
  styleUrls: ['./app.component.scss']
  // styles: ['h1 { color:blue; font-size: 67px }']
})

export class AppComponent {

  title = 'angular-application';
  numberOne = 123456;
  objectOne = {
    name: 'Dummy',
    message: 'Hello'
  };
  arrayOne = ['dfghj', 'dfgh', 'dfgh', 'fgh'];
  newVariable = 'qwertyu wertyuidfgh';

  parentVariableOne = '************ sndnns ***********';

  variableFromChild = '';

  constructor() {}

  myFunction() {
    alert('Hello');
  }

  mysecondFunction() {
    prompt('How are you ?');
  }

  dataFromChild(xyz: any) {
    this.variableFromChild = xyz;
    alert(xyz);
  }

  getFullName() {
    return 5+6
  }

}
