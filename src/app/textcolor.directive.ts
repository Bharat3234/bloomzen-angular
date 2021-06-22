import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTextcolor]'
})
export class TextcolorDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.fontSize = '50px';
    element.nativeElement.style.color = 'green';
  }

  // ng generate directive directiveName

}
