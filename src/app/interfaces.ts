export interface IUserResponse {
  user_id: string;
}

export interface IAuthRequestParams {
  username: string;
  password: string;
  lse_id: string;
}

export interface IOptimizationRequestParams {
  kwh: number;
  kw: number;
  preferences: string[];
  user_id: string;
  start_date: string;
  end_date: string;
}

interface IHourlyUseData {
  cost: number;
  emissions: number;
  hours: number[];
}

export interface IOptimizationResponse {
  start_date: string;
  end_date: string;
  baseline: IHourlyUseData;
  preferred: IHourlyUseData;
}
