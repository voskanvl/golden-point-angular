import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Valute} from "../../cbr.service";
import {OpenCloseHistoryService} from "../../open-close-history.service";

@Component({
  selector: 'app-item-row',
  templateUrl: './item-row.component.html',
  styleUrls: ['./item-row.component.sass'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemRowComponent {
  @Input() valute!: Valute

  constructor(public och: OpenCloseHistoryService) {
  }
}


