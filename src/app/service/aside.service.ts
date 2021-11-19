import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AsideService {

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<any>("http://localhost:3000/categories")
      .pipe(map((response: any) => {
        return response;
      }))
  }
  getBrands() {
    return this.http.get<any>(" http://localhost:3000/brands")
      .pipe(map((response: any) => {
        return response;
      }))
  }
}
