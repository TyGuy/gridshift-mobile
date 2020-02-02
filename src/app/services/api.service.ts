import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IAuthRequestParams, IUserResponse, IOptimizationResponse, IOptimizationRequestParams } from '../interfaces';

export const stubbedOptData: IOptimizationResponse = {
  start_date: '2020-02-02T02:00:00Z',
  end_date: '2020-02-03T02:00:00Z',
  baseline: {
    cost: 12.02,
    emissions: 1.693,
    hours: [
      5, 5, 5, 5, 5, 5,
      0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0,
    ]
  },
  preferred: {
    cost: 9.89,
    emissions: 1.003,
    hours: [
      0, 0, 0, 0, 0, 0,
      0, 5, 5, 5, 5, 5,
      5, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0,
    ]
  }
};

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  baseUrl = 'http://386f6dc4.ngrok.io';

  constructor(
    private http: HttpClient
  ) { }

  auth(requestParams: IAuthRequestParams): Observable<IUserResponse> {
    // return of({ user_id: '123' })
    const url = `${this.baseUrl}/user/`;
    return this.http.post<IUserResponse>(url, requestParams);
  }

  requestTimesAndRates(requestParams: IOptimizationRequestParams): Observable<IOptimizationResponse> {
    // return this.fakeRequestTimesAndRates();

    const url = `${this.baseUrl}/optimize/`;
    return this.http.post<IOptimizationResponse>(url, requestParams);
  }

  fakeRequestTimesAndRates(): Observable<IOptimizationResponse> {
    return of(stubbedOptData);
  }
}
