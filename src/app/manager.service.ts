import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ManagerService {

  projectTitle = 'Edited Project';

  constructor() { }

  // ng generage service serviceName

  // Dependency Injection
  // to create object of any class
  // to inject object of service class inside components

  functionFromService() {
    console.log('Console form the function of Service');
  }

  getValue() {
    return 89 + 32;
  }

  performSum(num1: number, num2: number) {
    console.log(num1 + num2);
    return num1 + num2;
  }

}
