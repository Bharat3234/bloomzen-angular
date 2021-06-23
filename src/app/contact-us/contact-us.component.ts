import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  newText = 'Dummy text';
  imageURL = 'https://picsum.photos/300/300';

  cssClassValue = 'new-class';
  isButtonDisabled = false;

  customStyle = 'color: green';

  colorName = 'rgb(255, 255, 255)';
  result = 'PASS';

  resultFromService = 0;


  constructor(
    // dependency injection
    public managerService: ManagerService
  ) { }

  ngOnInit(): void {
    console.log('managerService', this.managerService);
    this.managerService.functionFromService();
  }

  getSum(num1: number, num2: number) {
    return num1 + num2;
  }

  buttonClicked() {
    alert('Hello');
  }

  addTwo(num1: number, num2: number) {
    this.resultFromService = this.managerService.performSum(num1, num2);
  }

}
