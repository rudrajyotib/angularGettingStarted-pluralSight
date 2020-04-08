import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ProductService {

  private productUrl = 'api/products/products.json';

  constructor(private httpClient: HttpClient) {

  }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.productUrl)
      .pipe(tap(data => console.log('data received::' + JSON.stringify(data))),
        catchError(this.handleError));
  }

  getProduct(productId:number):Observable<Product>
  {
    return this.getProducts()
    .pipe(
      map((products: Product[]) => products.find(p => p.productId === productId))
    );
  }

  private handleError(err : HttpErrorResponse)
  {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent)
    {
      errorMessage = 'an error occurred '+ err.error.message;
    }else
    {
      errorMessage = 'Server returned error code '+err.status;
    }
    console.error(errorMessage);
    return throwError(err);
  }

}