import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CBRService, Valute} from "./cbr.service";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'golden-point-angular';
  valutes!: Observable<Valute[]>
  constructor(public cbr: CBRService) {
  }

  ngOnInit(): void {
    this.valutes=this.cbr.data.pipe(map(v=>Object.values(v.Valute)))
  }


}
