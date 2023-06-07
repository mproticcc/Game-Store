import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appPrice]',
})
export class PriceDirective implements OnInit {
  @Input('appPrice') price!: number;

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    if (this.price < 1000) {
      this.highlightBackground('#06bd64');
    } else if (this.price >= 1000 && this.price <= 5000) {
      this.highlightBackground('lightblue');
    } else {
      this.highlightBackground('#dcdcdc');
    }
  }

  private highlightBackground(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
