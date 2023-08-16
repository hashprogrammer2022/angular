import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  //alternative to renderer2 is to use hostBinding
  //the property need an initial value
  @HostBinding('style.backgroundColor') pBackgroundColor:string;

  //the value can be set dynamically
  @Input() defaultColor:string;
  @Input() highlightColor:string;

  constructor(private elmRef:ElementRef) { }
  ngOnInit(): void {
    this.pBackgroundColor = this.defaultColor || 'transparent';
  }
  //to make it interactive
  @HostListener('mouseenter')
  mouseEnter(ev:Event){
    this.pBackgroundColor =  this.highlightColor || 'green';
  }
  @HostListener('mouseleave')
  mouseLeave(ev:Event){
    this.pBackgroundColor =  this.defaultColor || 'transparent';
  }
}
