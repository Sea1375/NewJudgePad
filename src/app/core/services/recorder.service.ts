import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RecorderService {

  constructor(
    private http: HttpClient
  ) { }

  login(data: object): Observable<{ isValid: boolean }> {
    return this.http.post<{isValid: boolean}>(`${environment.api}/recorder/login`, data);
  }

}

