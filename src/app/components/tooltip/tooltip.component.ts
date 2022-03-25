import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.sass']
})
export class TooltipComponent {
  @Input() event!: MouseEvent

  getTargetName() {
    const target = this.event.target
    const name = (target as Element).closest('li')?.getAttribute('name')

    console.log('name', name)
    return name
  }
}
