import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ManagerService } from '../manager.service';

@Component({
    selector: 'app-about-us',
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.scss']
})

export class AboutUsComponent implements OnInit, OnChanges {

    @Input() dataFromParent = 'QWERTY';

    userName = 'Bloomzen';

    inputValue = '';

    todayDate = new Date();

    constructor(
        public managerService: ManagerService
    ) { }

    ngOnInit(): void {
        console.log('ngOnInit of About us component');
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges of About us component');
        console.log('changes :', changes);
        if (changes.dataFromParent.currentValue == 'PASS') {
            console.log('PASSED');
        }
    }

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