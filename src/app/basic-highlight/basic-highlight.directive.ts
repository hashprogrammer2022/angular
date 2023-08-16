import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{
    
    constructor(private elmRef:ElementRef){}
    
    ngOnInit(): void {
        this.elmRef.nativeElement.style.background = "yellow";
    }
}