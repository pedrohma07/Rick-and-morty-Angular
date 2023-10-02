// shared.service.ts

import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SharedService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private currentParamSubject = new BehaviorSubject<any>(1);
  currentParam$ = this.currentParamSubject.asObservable();

  constructor() {}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setCurrentPage(page: any) {
    this.currentParamSubject.next(page);
  }
}
