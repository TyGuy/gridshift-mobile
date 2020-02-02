import { Injectable } from '@angular/core';
import { IOptimizationRequestParams, IOptimizationResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public authData: any;
  public user: any;
  public preferences: any[] = [
    { title: 'Cheap', description: 'Prioritize cost savings', value: 'cost' },
    { title: 'Clean', description: 'Prioritize low emissions', value: 'emissions' },
    { title: 'Control', description: 'Prioritize immediate use', value: 'control' },
  ];

  public energyNeed = 30; // kWh
  public powerDraw = 6; // kW

  public loading = false;
  public ready = false;

  public optimizationData: IOptimizationResponse;

  get optimizationRequestData(): IOptimizationRequestParams {
    return {
      kwh: this.energyNeed,
      kw: this.powerDraw,
      preferences: this.preferences.map((pref) => pref.value),
      user_id: this.user.id,
      start_date: new Date().toISOString(),
      end_date: new Date(new Date().getTime() + 1000 * 60 * 60 * 24).toISOString(),
    };
  }

  public expectedBenefitsMap = {
    cost: { savings: 3.19, emissions: 0.9 },
    emissions: { savings: 1.21, emissions: 1.4 },
    control: { savings: 0, emissions: 0 },
  };

  get expectedDailySavings(): number {
    const firstPref = this.preferences[0].value;
    return this.expectedBenefitsMap[firstPref].savings;
  }

  get expectedDailyMitigation(): number {
    const firstPref = this.preferences[0].value;
    return this.expectedBenefitsMap[firstPref].emissions;
  }

  constructor() { }
}
