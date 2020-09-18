import {Directive, HostBinding, HostListener} from '@angular/core';
@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective{
    // isOpen = false;
    @HostBinding('class.open') isOpen =false;
    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
        // console.log(this.class12);
    }
}