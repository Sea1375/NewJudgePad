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
  status = 'none';
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
    // this.assignedUsers = this.judges.filter(judge => judge.userId !=0).map(judge => ({
    //   judge_id: judge.id,
    //   user_id: judge.userId
    // }));
    // console.log(this.assignedUsers);
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

  async save(): Promise<any> {
    try {
      const payload = Object.keys(this.assignedUsers).filter(key => this.assignedUsers[key] ? key : null).map(key => ({
        judge_id: key,
        user_id: this.assignedUsers[key].id
      }));
      for(let i = 1; i <= 12; i++) {
        await this.judgeService.write(i, {userId: 0}).toPromise();
      }
      for(let i = 0; i < payload.length; i ++) {
        await this.judgeService.write(Number(payload[i].judge_id), {userId: payload[i].user_id}).toPromise();
      }
      this.status = 'success';
    } catch (e) {
      console.log(e);
      this.status = 'failed';
    }
  }
}
