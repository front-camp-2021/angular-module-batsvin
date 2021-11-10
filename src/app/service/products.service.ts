import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public search = new BehaviorSubject<string>("")

  constructor(private http: HttpClient) { }

  getProduct() {
    return this.http.get<any>("http://localhost:3000/products")
      .pipe(map((response: any) => {
        return response;
      }))
  }

}
