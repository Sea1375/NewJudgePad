import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { GeneralInfo } from '../models/general-info';
import { Judge } from '../models/judge';
import { UserJudge } from '../models/user-judge';
import { User } from '../models/user';

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

  register(data): Observable<{status: boolean}> {
    return this.http.post<{status: boolean}>(`${environment.api}/judge/register`, data);
  }
  changeBackend(id: number, data) {
    return this.http.post(`${environment.api}/judge/changeBackend/${id}`, data);
  }
  reset(data): Observable<{ status: boolean }> {
    return this.http.post<{ status: boolean }>(`${environment.api}/judge/password-reset`, data);
  }

  sendEmail(data): Observable<{ status: boolean }> {
    return this.http.post<{status: boolean}>(`${environment.api}/judge/send-email`, data);
  }

  getGeneralInfo(judgeId: number): Observable<GeneralInfo> {
    return this.http.get<GeneralInfo>(`${environment.api}/judge/get/name-judgeNumber-diveCode/${judgeId}`);
  }

  write(id: number, data: object): Observable<any> {
    return this.http.post(`${environment.api}/judge/write/${id}`, data);
  }

  readAll(): Observable<Judge[]> {
    return this.http.get<Judge[]>(`${environment.api}/judge/read/all`);
  }

  readUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.api}/user/read/all`);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.get(`${environment.api}/user/delete/${id}`);
  }

  readJudgesUserInfo(): Observable<UserJudge[]> {
    return this.http.get<UserJudge[]>(`${environment.api}/judge/read/user-info`);
  }

  getDiveCode(): Observable<{diveCode: string}> {
    return this.http.get<{diveCode: string}>(`${environment.api}/admin/diveCode`);
  }

  setDiveCode(code: string): Observable<any> {
    return this.http.post(`${environment.api}/admin/diveCode`, {diveCode: code});
  }

  readJudgeMsgFromRecorderById(id: number): Observable<{msgFromRecorder: string}> {
    return this.http.get<{msgFromRecorder: string}>(`${environment.api}/judge/read/${id}/msgFromRecorder`);
  }

  readAllPlusJudges(): Observable<{ id: number, judgeNumber: string, msgFromRecorder: string }[]> {
    return this.http.get<{ id: number, judgeNumber: string, msgFromRecorder: string }[]>(`${environment.api}/judge/read/allPlusJudges`);
  }

  submitScoreIsValid(id: number): Observable<{isValid: boolean}> {
    return this.http.get<{isValid: boolean}>(`${environment.api}/judge/read/score/exist/${id}`);
  }
}
