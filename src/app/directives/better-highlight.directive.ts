import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[app-betterHighlight]'
})

export class BetterHighlightDirective implements OnInit{
    @Input() defaultColor: string = 'transparent';
    @Input() hoverColor: string;
    @HostBinding('style.backgroundColor') changeColor: string = 'transparent';


    constructor(private elRef: ElementRef,private renderer:Renderer2){}

    ngOnInit(){
        // this.renderer.setStyle(this.elRef.nativeElement,'background-color','green');
        this.changeColor = this.defaultColor;

    }


    @HostListener('mouseover') onHover(){ // onHover() will be called on 'mouseover' event, where this directive is called
        // this.renderer.setStyle(this.elRef.nativeElement,'background-color','green');
        // this.changeColor = 'green'; 
        this.changeColor = this.hoverColor;

    }
    @HostListener('mouseout') onHoverOut(){
        // this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
        // this.changeColor = 'transparent'; 
        this.changeColor = this.defaultColor;

        
    }
}