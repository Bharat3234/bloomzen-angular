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

  parentVariableOne = 'FAIL';

  variableFromChild = '';

  isNewUser = true;
  isUserVerified = false;

  stringVariable = 'FAIL';

  users = ['User1', 'User2', 'User3', 'User4', 'User5'];

  students = [
    { id: 1, firstName: 'qwert', lastName: 'dfgh', result: 'PASS' },
    { id: 2, firstName: 'edfghjm', lastName: 'asdasd', result: 'PASS' },
    { id: 3, firstName: 'sdfvgbnm', lastName: 'asdsad', result: 'FAIL' },
    { id: 4, firstName: 'ghkjh', lastName: 'sadsd', result: 'FAIL' },
    { id: 5, firstName: 'dfghjk', lastName: 'ddsadasfgh', result: 'PASS' },
  ];

  todayDay = new Date().getDay();

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

  /*
  Directives
  1. Attribute Directives
  ngClass
  ngStyle
  ngModel

  2. Structural Directives
  NgIf => *ngIf - to show or hide html elements conditionally
  NgFor => *ngFor - to repeat html element (to loop on data - specifically on Array)
  NgSwitch => [ngSwitch] - to switch between multiple values
  */

}
