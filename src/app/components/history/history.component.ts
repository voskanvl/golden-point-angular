import {Component, Input, OnInit} from '@angular/core';
import {isError, Valute, ValuteError} from "../../cbr.service";
import {PreviousDaysService} from "@app/previous-days-service.service";


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.sass']
})
export class HistoryComponent implements OnInit {
  @Input() valute!: Valute | ValuteError
  @Input() open: boolean = false
  courses: { date: string, valute: Valute }[] = []
  errors: { error: boolean, url: string }[] = []

  constructor(public previousDays: PreviousDaysService) {
  }


  ngOnInit(): void {
    if (!isError(this.valute)) this.previousDays
      .getByValuteName(this.valute.CharCode, 10).subscribe({
        next: v => {
          if ('error' in v) {
            this.errors.push(v)
          } else {
            this.courses.push(v);
          }
        },
      })
  }
}

//TODO: сделать PreviousDaysService сервис, который должен предоставлять данные по валюте за предыдущие дни
