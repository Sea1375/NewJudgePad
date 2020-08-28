import { Component, OnInit } from '@angular/core';
import { Judge } from '../../../core/models/judge';
import { JudgeService } from '../../../core/services/judge.service';
import { User } from '../../../core/models/user';

@Component({
  selector: 'app-judge-selection',
  templateUrl: './judge-selection.component.html',
  styleUrls: ['./judge-selection.component.scss']
})
export class JudgeSelectionComponent implements OnInit {

  isLoading = false;
  judges: Judge[] = [];
  users: User[] = [];
  assignedUsers: any = {};

  constructor(
    private judgeService: JudgeService
  ) { }

  ngOnInit(): void {
    this.readJudges();
    this.readUsers();
  }

  async readJudges(): Promise<any> {
    this.judges = await this.judgeService.readAll().toPromise();
  }

  async readUsers(): Promise<any> {
    try {
      this.isLoading = true;
      this.users = await this.judgeService.readUsers().toPromise();
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

  changeSelection(): void {
    const payload = Object.keys(this.assignedUsers).filter(key => this.assignedUsers[key] ? key : null).map(key => ({
      judge_id: key,
      user_id: this.assignedUsers[key].id
    }));
  }

}
