import { Injectable } from '@angular/core';
import { IOptimizationRequestParams, IOptimizationResponse } from '../interfaces';
import { stubbedOptData } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public authData: any;
  public user: any = { user_id: 1 };
  public preferences: any[] = [
    { title: 'Cheap', description: 'Prioritize cost savings', value: 'cost' },
    { title: 'Clean', description: 'Prioritize low emissions', value: 'emissions' },
    { title: 'Control', description: 'Prioritize immediate use', value: 'control' },
  ];

  public energyNeed = 30; // kWh
  public powerDraw = 6; // kW

  public loading = false;
  public ready = false;

  public optimizationData: IOptimizationResponse = stubbedOptData;

  get optimizationRequestData(): IOptimizationRequestParams {
    return {
      kwh: this.energyNeed,
      kw: this.powerDraw,
      preferences: this.preferences.map((pref) => pref.value),
      user_id: this.user.user_id,
      // start_date: '2020-02-02T02:00:00Z',
      // end_date: '2020-02-03T02:00:00Z',
    } as any;
  }

  public expectedBenefitsMap = {
    cost: { savings: 3.19, emissions: 0.9 },
    emissions: { savings: 1.21, emissions: 1.4 },
    control: { savings: 0, emissions: 0 },
  };

  get preferredValue(): string {
    return this.preferences[0].value;
  }

  get expectedDailySavings(): number {
    const firstPref = this.preferredValue;
    return this.expectedBenefitsMap[firstPref].savings;
  }

  get expectedDailyMitigation(): number {
    const firstPref = this.preferredValue;
    return this.expectedBenefitsMap[firstPref].emissions;
  }

  get runHoursToday(): string {
    const startPeriodHours = new Date(this.optimizationData.start_date).getHours();
    const endPeriodHours = new Date(this.optimizationData.end_date).getHours();

    let startHours = startPeriodHours;
    let endHours = endPeriodHours;

    let state = 'before';
    this.optimizationData.preferred.hours.forEach((hourValue, i) => {
      if (state === 'before') {
        if (hourValue > 0 ) {
          state = 'during';
          startHours += i;
        }
      }

      if (state === 'during') {
        if (hourValue === 0 ) {
          state = 'after';
          endHours += i;
        }
      }
    });

    let startMod = 'AM';
    let endMod = 'AM';

    if (startHours > 11) {
      startHours -= 12;
      startMod = 'PM';
    }
    if (startHours > 11) {
      startHours -= 12;
      startMod = 'AM';
    }

    if (endHours > 11) {
      endHours -= 12;
      endMod = 'PM';
    }
    if (endHours > 11) {
      endHours -= 12;
      endMod = 'AM';
    }

    return `${startHours}${startMod} - ${endHours}${endMod}`;
  }

  get expectedSavingsToday(): number {
    const prefCost = this.optimizationData.preferred.cost;
    const baseCost = this.optimizationData.baseline.cost;

    return Math.max(0, (baseCost - prefCost));
  }

  get expectedMitigationToday(): number {
    const prefCost = this.optimizationData.preferred.emissions;
    const baseCost = this.optimizationData.baseline.emissions;

    return Math.max(0, (baseCost - prefCost));
  }

  get plannedUsage(): number {
    return this.optimizationData.preferred.hours.reduce((sum, thing) => sum + thing, 0);
  }

  constructor() { }
}
