import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  //to make it interactive
  constructor(private elmRef:ElementRef, private renderer:Renderer2) { }
  ngOnInit(): void {
    // this.renderer.setStyle(this.elmRef.nativeElement, 'background-color', 'blue');
  }
  @HostListener('mouseenter')
  mouseEnter(ev:Event){
    this.renderer.setStyle(this.elmRef.nativeElement, 'background-color', 'blue');
  }
  @HostListener('mouseleave')
  mouseLeave(ev:Event){
    this.renderer.setStyle(this.elmRef.nativeElement, 'background-color', 'transparent');
  }
}
