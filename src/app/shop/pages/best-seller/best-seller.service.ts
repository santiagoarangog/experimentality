import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {BestSellerInterface} from './best-seller.interface';
import {Observable} from 'rxjs';
import {ResponseApi} from '../../../shared/metadata/response.api';

@Injectable({
  providedIn: 'root'
})
export class BestSellerService {

  baseUrl = environment.url;

  constructor(private http: HttpClient) {
  }

  get(category: string): Observable<BestSellerInterface[]> {
    const url = `${this.baseUrl}search?q=${category}&limit=4`;

    return this.http.post<ResponseApi>(url, category).pipe(
      map((data: ResponseApi) => data.results),
      map((result) => result)
    );
  }
}
