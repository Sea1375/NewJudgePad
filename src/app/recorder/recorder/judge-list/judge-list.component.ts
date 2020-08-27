import { Component, OnInit } from '@angular/core';
import { Judge } from '../../../core/models/judge';
import { JudgeService } from '../../../core/services/judge.service';
import { UserJudge } from '../../../core/models/user-judge';
import { Router } from '@angular/router';

@Component({
  selector: 'app-judge-list',
  templateUrl: './judge-list.component.html',
  styleUrls: ['./judge-list.component.scss']
})
export class JudgeListComponent implements OnInit {

  judges: UserJudge[] = [];

  constructor(
    private judgeService: JudgeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.readJudgesUserInfo();
  }

  async readJudgesUserInfo(): Promise<any> {
    this.judges = await this.judgeService.readJudgesUserInfo().toPromise();
  }

  async changeCheckbox(index: number, obj: any): Promise<any> {
    try {
      const result = await this.judgeService.write(this.judges[index].id, {backend: obj.target.checked}).toPromise();
    } catch (e) {
      console.log(e);
    } finally {
    }
  }

  reset(userId: number): void {
    this.router.navigate(['/judge/reset']);
  }

}
