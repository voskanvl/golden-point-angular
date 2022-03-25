import {Component, Input} from '@angular/core';
import {Valute} from "../../cbr.service";
import {OpenCloseHistoryService} from "../../open-close-history.service";

@Component({
  selector: 'app-item-row',
  templateUrl: './item-row.component.html',
  styleUrls: ['./item-row.component.sass']
})
export class ItemRowComponent {
  @Input() valute!: Valute
  open: boolean = false;

  constructor(public och: OpenCloseHistoryService) {
  }
}


