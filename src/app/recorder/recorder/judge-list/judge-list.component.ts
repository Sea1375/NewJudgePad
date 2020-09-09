import { Component, OnInit } from '@angular/core';
import { JudgeService } from '../../../core/services/judge.service';
import { Router } from '@angular/router';

import { User } from '../../../core/models/user';

@Component({
  selector: 'app-judge-list',
  templateUrl: './judge-list.component.html',
  styleUrls: ['./judge-list.component.scss']
})
export class JudgeListComponent implements OnInit {

  isLoading = false;
  judges: User[] = [];

  constructor(
    private judgeService: JudgeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.readJudgesUserInfo();
  }

  async readJudgesUserInfo(): Promise<any> {
    this.judges = await this.judgeService.readUsers().toPromise();
  }

  async changeCheckbox(index: number, obj: any): Promise<any> {
    try {
      await this.judgeService.changeBackend(this.judges[index].id, {backend: obj.target.checked}).toPromise();
    } catch (e) {
      console.log(e);
    } finally {
    }
  }

  reset(userId: number): void {
    this.router.navigate(['/judge/reset']);
  }
  async delete(userId: number): Promise<any> {
    try {
      this.isLoading = true;
      await this.judgeService.deleteUser(userId).toPromise();
      this.readJudgesUserInfo();
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }
}
