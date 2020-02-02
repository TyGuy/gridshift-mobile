import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.page.html',
  styleUrls: ['./done.page.scss'],
})
export class DonePage implements OnInit {
  get expectedDailySavings(): number {
    return this.dataService.expectedDailySavings;
  }

  get expectedDailyMitigation(): number {
    return this.dataService.expectedDailyMitigation;
  }

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
  }

}
