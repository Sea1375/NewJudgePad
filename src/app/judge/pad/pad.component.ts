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
  dive: { diveCode: string };

  private autoSaveInterval: number = setInterval( ()=>{
    this.readDiveCode();
  },3000);

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

  async readDiveCode(): Promise<any> {
    try {
      this.dive = await this.judgeService.getDiveCode().toPromise();
    } catch (e) {
      console.log(e);
    }
  }
  logout(): void {
    this.router.navigate(['judge/login']);
  }
}
