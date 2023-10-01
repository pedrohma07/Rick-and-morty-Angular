// shared.service.ts

import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SharedService {
  private currentPageSubject = new BehaviorSubject<number>(1);
  currentPage$ = this.currentPageSubject.asObservable();

  constructor() {}

  setCurrentPage(page: number) {
    this.currentPageSubject.next(page);
  }
}
