import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  //alternative to renderer2 is to use hostBinding
  //the property need an initial value
  @HostBinding('style.backgroundColor') pBackgroundColor:string;

  constructor(private elmRef:ElementRef) { }
  ngOnInit(): void {
    this.pBackgroundColor = 'transparent';
  }
  //to make it interactive
  @HostListener('mouseenter')
  mouseEnter(ev:Event){
    this.pBackgroundColor = "green";
  }
  @HostListener('mouseleave')
  mouseLeave(ev:Event){
    this.pBackgroundColor = "transparent"; 
  }
}
