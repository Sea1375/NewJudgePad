import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { JudgeService } from '../../core/services/judge.service';
import { GeneralInfo } from '../../core/models/general-info';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-pad',
  templateUrl: './pad.component.html',
  styleUrls: ['./pad.component.scss']
})
export class PadComponent implements OnInit {

  id: number = Number(this.route.snapshot.params.id);
  generalInfo: GeneralInfo;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private judgeService: JudgeService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getGeneralInfo(this.id);
  }

  async getGeneralInfo(judgeId: number): Promise<any> {
    try {
      this.generalInfo = await this.judgeService.getGeneralInfo(judgeId).toPromise();
    } catch (e) {
      if (e.status === 401) {
        this.authService.judgeSession = false;
        this.router.navigate(['/judge/login']);
      }
    }
  }

  logout(): void {
    this.router.navigate(['judge/login']);
  }
}
