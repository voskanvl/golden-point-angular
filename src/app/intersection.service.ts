import { ElementRef, Injectable } from '@angular/core';
import { distinctUntilChanged, map, mergeMap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IntersectionService {
  createAndObserve(element: ElementRef): Observable<boolean> {
    return new Observable((observer) => {
      const intersectionObserver = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]) => {
          console.log('🚀 ~ entries', entries);

          observer.next(entries);
        }
      );

      intersectionObserver.observe(element.nativeElement);

      // return () => {
      //   intersectionObserver.disconnect();
      // };
    }).pipe(
      map((entry) => (entry as IntersectionObserverEntry[])[0].isIntersecting),
      distinctUntilChanged()
    );
  }
}
