import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-summary-stat',
  templateUrl: './summary-stat.component.html',
  styleUrls: ['./summary-stat.component.scss'],
})
export class SummaryStatComponent implements OnInit {
  @Input() imageUrl: string;
  @Input() statValue: any;
  @Input() statName: string;
  @Input() outsized = false;

  constructor() { }

  ngOnInit() {}

}
