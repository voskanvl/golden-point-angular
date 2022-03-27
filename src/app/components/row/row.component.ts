import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {isError, Valute} from "../../cbr.service";

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RowComponent {
  @Input() valute!: Valute
  @Input() date!: string

  get percent(): string {
    return (this.valute.Value / this.valute.Previous * 100).toFixed(2)
  }


  isValute() {
    return !isError(this.valute)
  }
}
