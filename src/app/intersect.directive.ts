import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import {
  exhaustMap,
  interval,
  map,
  Observable,
  of,
  Subject,
  take,
  takeUntil,
} from 'rxjs';
import { IntersectionService } from './intersection.service';

@Directive({
  selector: '[intersection]',
})
export class IntersectDirective {
  @Output() intersect: EventEmitter<boolean> = new EventEmitter();
  @Output() isInScreen: EventEmitter<number> = new EventEmitter();
  constructor(public inter: IntersectionService, public item: ElementRef) {
    this.inter
      .createAndObserve(this.item)
      // .pipe(filter((isVisible: boolean) => isVisible))
      .subscribe((v) => {
        console.log('directive', v);
        this.intersect.emit(v);
      });
    this.inScreen.subscribe((v) => this.isInScreen.emit(v));
  }
  get inScreen(): Observable<number> {
    const windowHeight = window.innerHeight;
    const out$ = new Subject<any>();
    return interval(100).pipe(
      map(() => {
        const topElement = (
          this.item.nativeElement as Element
        ).getBoundingClientRect().top;
        if (windowHeight < topElement) out$.next(topElement);
        return topElement;
      }),
      takeUntil(out$),
      take(100)
    );
  }
}
