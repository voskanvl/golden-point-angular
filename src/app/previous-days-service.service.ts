import {Injectable} from '@angular/core';
import {CBRrequest, ResponseByValuteName, Valute} from "./cbr.service";
import {HttpClient} from "@angular/common/http";
import {catchError, delay, from, map, mergeMap, Observable, of, switchMap, tap} from "rxjs";
import {fromFetch} from "rxjs/fetch";

@Injectable({
  providedIn: 'root'
})
export class PreviousDaysService {
  data: Observable<CBRrequest>[] = []
  private cache = new Map()

  constructor(private http: HttpClient) {
  }

  fillCache(CharCode: Valute['CharCode'], urls: string[]): ResponseByValuteName {
    const res = from(urls)
      .pipe(
        mergeMap((url) =>
          fromFetch(url).pipe(
            // tap(v => console.log('fetch', url, v)),
            switchMap(res => res.json()),
            map((v) => {
              return {date: v.Date, valute: v.Valute[CharCode]};
            }),
            delay(500),
            tap(v => this.cache.set(CharCode, of(v))),
            catchError(error => of({error, url})),
          )
        )
      )
    return res
  }

  getByValuteName(CharCode: Valute['CharCode'], days: number): ResponseByValuteName {
    if (this.cache.has(CharCode)) return this.cache.get(CharCode)
    const arrayUrls = this.getUrlsArray(days,
      "https://www.cbr-xml-daily.ru/archive/",
      "/daily_json.js")
    const res = this.fillCache(CharCode, arrayUrls);
    return res
  }

  // }
  private getUrlsArray(volume: number, prefix: string, postfix: string): string[] {
    const date = new Date(Date.now());
    const day = date.getDate();
    const res = [];
    for (let index = 1; index < volume; index++) {
      date.setDate(day - index);
      let str = date.toLocaleDateString().split(".").reverse().join("/");
      str = prefix + str + postfix;
      res.push(str);
    }
    return res;
  }
}
