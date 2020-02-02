import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-steps',
  templateUrl: './vertical-steps.component.html',
  styleUrls: ['./vertical-steps.component.scss'],
})
export class VerticalStepsComponent implements OnInit {
  @Input() public curStep: number;

  constructor() { }

  ngOnInit() {}

}
