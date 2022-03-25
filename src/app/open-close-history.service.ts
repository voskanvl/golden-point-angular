import {Injectable} from '@angular/core';
import {Valute} from "./cbr.service";

@Injectable({
  providedIn: 'root'
})
export class OpenCloseHistoryService {
  private openedId = ""

  set(id: Valute['ID']) {
    if (id === this.openedId) return this.openedId = ""
    return this.openedId = id
  }

  get() {
    return this.openedId
  }
}
