import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private subject = new Subject<any>();

  sendFilter() {
    this.subject.next()
  }

  getFilter(): Observable<any> {
    return this.subject.asObservable();
  }
}
