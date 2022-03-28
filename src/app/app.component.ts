import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { map, take } from 'rxjs';
import { CBRService, Valute } from './cbr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'golden-point-angular';
  courses: Valute[] = [];

  courses1: Valute[] = [];

  constructor(public cbr: CBRService, private cdr: ChangeDetectorRef) {}

  intersect(event: boolean) {
    if (event && this.courses.length > 0 && this.courses[0]) {
      this.courses1.push(this.courses.shift() as Valute);
    }
  }

  isInScreen(event: number) {
    if (this.courses.length > 0 && this.courses[0])
      this.courses1.push(this.courses.shift() as Valute);
  }

  ngOnInit(): void {
    this.cbr.data
      .pipe(
        map((v) => Object.values(v.Valute)),
        take(1)
      )
      .subscribe((v) => {
        this.courses = v;
      });
  }
  ngAfterViewInit(): void {}
}
