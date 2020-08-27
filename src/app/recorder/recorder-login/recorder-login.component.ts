import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RecorderService } from '../../core/services/recorder.service';

@Component({
  selector: 'app-recorder-login',
  templateUrl: './recorder-login.component.html',
  styleUrls: ['./recorder-login.component.scss']
})
export class RecorderLoginComponent implements OnInit {

  loginName: string;
  loginPass: string;

  constructor(
    private recorderService: RecorderService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async login(): Promise<any> {
    const result: {isValid: boolean}  = await this.recorderService.login({username: this.loginName, password: this.loginPass}).toPromise();
    if(result.isValid === true) {
      this.router.navigate(['recorder/recorder']);
    }
  }

  goToJudge(): void {
    this.router.navigate(['/judge/login']);
  }
}
