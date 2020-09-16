import { Directive, ElementRef, OnInit } from "@angular/core";
@Directive({
    selector: '[app-basicHighlight]'
})



export class BasicHighlightDirective implements OnInit{
    constructor(private directiveElement:ElementRef){}
    ngOnInit(){
        this.directiveElement.nativeElement.style.backgroundColor = 'pink';
    }
}