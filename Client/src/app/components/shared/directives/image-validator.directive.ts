import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';

@Directive({
  selector: '[appImageValidator]'
})
export class ImageValidatorDirective {

  constructor(private elRef: ElementRef, private regForm: NgForm) { }
  @HostListener('input')
  inputHandler(){
    let el:string = this.elRef.nativeElement.value;
    if(el.startsWith('http') && (el.endsWith('png') || el.endsWith('png'))){
      this.elRef.nativeElement.style.borderColor = 'green';
      this.regForm.control.setErrors(null);
    }
    else{
      this.elRef.nativeElement.style.borderColor = 'red';
      this.regForm.control.setErrors({'imageUrl': true});
    }
  }
}
