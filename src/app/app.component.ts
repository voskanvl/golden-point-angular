import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { CBRService, Valute } from './cbr.service';
import { filter, map, Observable } from 'rxjs';
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
  constructor(public cbr: CBRService) {}

  ngOnInit(): void {
    this.valutes = this.cbr.data.pipe(map((v) => Object.values(v.Valute)));
  }
  ngAfterViewInit(): void {}
}
