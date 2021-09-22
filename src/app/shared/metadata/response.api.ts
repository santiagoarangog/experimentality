export interface ResponseApi {
  site_id: string;
  country_default_time_zone: string;
  query: string;
  paging: Paging;
  results: any;
}

export interface Paging {
  total: number;
  primary_results: number;
  offset: number;
  limit: number;
}
