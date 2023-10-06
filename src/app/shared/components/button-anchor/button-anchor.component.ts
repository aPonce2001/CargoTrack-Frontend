import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-anchor',
  templateUrl: './button-anchor.component.html',
  styleUrls: ['./button-anchor.component.css']
})
export class ButtonAnchorComponent {
  @Input() text: string = '';
  @Input() url: string = '';
}
