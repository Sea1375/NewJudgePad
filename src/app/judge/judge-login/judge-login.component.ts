import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { JudgeService } from '../../core/services/judge.service';

@Component({
  selector: 'app-judge-login',
  templateUrl: './judge-login.component.html',
  styleUrls: ['./judge-login.component.scss']
})
export class JudgeLoginComponent implements OnInit {

  loginName: string;
  loginPass: string;
  registeredJudge = true;

  constructor(
    private judgeService: JudgeService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async login(): Promise<any> {
    const result: {id: number} = await this.judgeService.login({username: this.loginName, password: this.loginPass}).toPromise();
    if(result.id != 0) {
      this.router.navigate(['judge/pad', result.id]);
    } else {
      this.registeredJudge = false;
    }
  }
}
