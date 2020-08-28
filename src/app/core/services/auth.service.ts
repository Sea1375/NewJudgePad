import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  judgeSession = false;
  recorderSession = false;

  constructor() { }
}
