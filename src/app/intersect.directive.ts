import { AfterViewInit, Directive, ElementRef, OnInit } from '@angular/core';
import { IntersectionService } from './intersection.service';

@Directive({
  selector: '[intersection]',
})
export class IntersectDirective implements AfterViewInit {
  constructor(public inter: IntersectionService, public item: ElementRef) {
    console.log('ngAfterViewInit', this.item.nativeElement);

    this.inter
      .createAndObserve(this.item)
      // .pipe(filter((isVisible: boolean) => isVisible))
      .subscribe(console.log);
  }
  ngAfterViewInit(): void {}
}
