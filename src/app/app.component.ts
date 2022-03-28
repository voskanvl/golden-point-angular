import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CBRService, Valute } from './cbr.service';
import { filter, map, Observable, take } from 'rxjs';
import { IntersectionService } from '@app/intersection.service';
import { ItemRowComponent } from '@components/item-row/item-row.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('ob', { read: ElementRef })
  item!: ElementRef;
  title = 'golden-point-angular';
  valutes!: Observable<Valute[]>;
  courses: Valute[] = [];

  currentIndexCourses = -1;
  courses1: Valute[] = [];

  constructor(public cbr: CBRService, private cdr: ChangeDetectorRef) {}

  intersect(event: boolean) {
    if (event) {
      this.currentIndexCourses++;
      this.courses1.push(this.courses[this.currentIndexCourses]);
    }
  }

  isInScreen(event: number) {
    this.currentIndexCourses++;
    this.courses1.push(this.courses[this.currentIndexCourses]);
  }

  ngOnInit(): void {
    this.valutes = this.cbr.data.pipe(map((v) => Object.values(v.Valute)));
    this.valutes.pipe(take(1)).subscribe((v) => {
      this.courses = v;
    });
  }
  ngAfterViewInit(): void {}
}
