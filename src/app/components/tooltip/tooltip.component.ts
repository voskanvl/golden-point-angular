import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.sass']
})
export class TooltipComponent {
  @Input() event: MouseEvent | null = null

  get avaible() {
    return !!this.getTargetName()
  }

  getTargetName() {
    if (this.event) {
      const target = this.event.target
      const name = (target as Element).closest('li')?.getAttribute('name')
      return name
    }
    return null
  }
}
