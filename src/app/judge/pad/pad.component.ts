import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { JudgeService } from '../../core/services/judge.service';
import { GeneralInfo } from '../../core/models/general-info';

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
    private judgeService: JudgeService
  ) { }

  ngOnInit(): void {
    this.getGeneralInfo(this.id);
  }

  async getGeneralInfo(judgeId: number): Promise<any> {
    this.generalInfo = await this.judgeService.getGeneralInfo(judgeId).toPromise();
    console.log(this.generalInfo);
  }

  logout(): void {
    this.router.navigate(['judge/login']);
  }
}
