import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JudgeService {

  constructor(
    private http: HttpClient
  ) {
  }

  login(data): Observable<{ id: number }> {
    return this.http.post<{ id: number }>(`${environment.api}/judge/login/get-id`, data);
  }

  register(data): Observable<any> {
    return this.http.post(`${environment.api}/judge/register`, data);
  }

  reset(data): Observable<{ status: boolean }> {
    return this.http.post<{status: boolean}>(`${environment.api}/judge/reset`, data);
  }

}
