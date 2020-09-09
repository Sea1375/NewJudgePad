import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { JudgeService } from '../../core/services/judge.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-judge-login',
  templateUrl: './judge-login.component.html',
  styleUrls: ['./judge-login.component.scss']
})
export class JudgeLoginComponent implements OnInit {

  isLoading = false;
  loginName: string;
  loginPass: string;
  registeredJudge = true;

  constructor(
    private judgeService: JudgeService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async login(): Promise<any> {
    try {
      this.isLoading = true;
      const result: {id: number} = await this.judgeService.login({username: this.loginName, password: this.loginPass}).toPromise();
      this.authService.judgeSession = true;
      console.log(result);
      if(result.id != 0) {
        this.router.navigate(['judge/pad', result.id]);
      } else {
        this.registeredJudge = false;
        this.authService.judgeSession = false;
      }
    } catch (e) {
      if (e.status === 401) {
        this.registeredJudge = false;
      }
    } finally {
      this.isLoading = false;
    }
  }

  goToRecorder(): void {
    this.router.navigate(['/recorder/login']);
  }
}
