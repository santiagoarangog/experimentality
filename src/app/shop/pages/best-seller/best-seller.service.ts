import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {BestSellerInterface} from './best-seller.interface';
import {Observable} from 'rxjs';
import {ResponseApi} from '../../../shared/metadata/response.api';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BestSellerService {

  baseUrl = environment.url;
  private _history: string[] = [];
  private _products: string[] = [];

  constructor(private http: HttpClient,
              private _router: Router) {
    this._history = JSON.parse(localStorage.getItem('historial')!) || [];
  }

  get(category: string, limit: number = 4): Observable<BestSellerInterface[]> {
    const url = `${this.baseUrl}search?q=${category}&limit=${limit}`;

    return this.http.post<ResponseApi>(url, category).pipe(
      map((data: ResponseApi) => data.results),
      map((result: BestSellerInterface[]) => result)
    );
  }

  get history() {
    return [...this._history];
  }

  get productsOfCart() {
    return [...this._history];
  }

  search(query: string): void {
    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._history));
    }
  }
}
