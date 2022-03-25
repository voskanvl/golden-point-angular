import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface CBRrequest {
  Date: string,
  PreviousDate: string,
  PreviousURL: string,
  Timestamp: string,
  Valute: { [key: string]: Valute }
}

export interface Valute {
  ID: string,
  NumCode: string,
  CharCode: string,
  Nominal: number,
  Name: string,
  Value: number,
  Previous: number,
}

export interface ValuteError {
  error: string
}

export type ResponseByValuteName = Observable<{ date: string, valute: Valute } | { error: boolean, url: string }>
export const isError = (valute: Valute | ValuteError): valute is ValuteError =>{
  if ('error' in valute) return true
  return false
}
@Injectable({
  providedIn: 'root'
})
export class CBRService {
  data!: Observable<CBRrequest>

  constructor(private http: HttpClient) {
    this.data = this.http.get<CBRrequest>('https://www.cbr-xml-daily.ru/daily_json.js')
  }

}
