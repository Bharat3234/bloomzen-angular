import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-about-us',
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.scss']
})

export class AboutUsComponent {

    @Input() dataFromParent = '';

    userName = 'Bloomzen';

    inputValue = '';

    todayDate = new Date();

    constructor() { }

    onClick() {
        console.log('Hello');
    }

    submit(emailvalue: any) {
        console.log('emailvalue :', emailvalue);
    }

    changeUserName() {
        this.userName = 'New User Name';
    }

    onKeyUp() {
        console.log('this.inputValue', this.inputValue);
    }

    /*
    Pipes
    it transforms values(string, current, date)
    | - pipe
    DatePipe
        short - M/d/yy, h:mm a
        medium - MMM d, y, h:mm:ss a
        long - MMMM d, y, h:mm:ss a z
        full - EEEE, MMMM d, y, h:mm:ss a zzzz
        shortDate - M/d/yy
        mediumDate - MMM d, y
        longDate - MMMM d, y
        fullDate - EEEE, MMMM d, y
        shortTime - h:mm a
        mediumTime - h:mm:ss a
        longTime - h:mm:ss a z
        fullTime - h:mm:ss a zzzz
    UpperCasePipe
    LowerCasePipe
    CurrencyPipe
        USD
        INR
        EUR
    DecimalPipe
    PercentPipe
    */


}