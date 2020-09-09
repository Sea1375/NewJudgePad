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
  statusString = '';
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
    try {
      this.isLoading = true;
      this.judges = await this.judgeService.readAll().toPromise();
      if (this.users.length) {
        this.loadAssignedUsers();
      }
    } catch (e) {
      console.log(e);
      // TODO: show toast with provided e
    } finally {
      this.isLoading = false;
    }
  }

  async readUsers(): Promise<any> {
    try {
      this.isLoading = true;
      this.users = await this.judgeService.readUsers().toPromise();
      if (this.judges.length) {
        this.loadAssignedUsers();
      }
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

  loadAssignedUsers() { // TODO: change method name
    this.judges.forEach(judge => {
      const userId = this.users.find(user => user.id === judge.userId);
      if (userId) {
        this.assignedUsers[judge.id] = userId;
      }
    });
  }

  async save(): Promise<any> {
    try {
      this.isLoading = true;
      const payload = Object.keys(this.assignedUsers).filter(key => this.assignedUsers[key] ? key : null).map(key => ({
        judge_id: key,
        user_id: this.assignedUsers[key].id
      }));
      for(let i = 0; i < payload.length; i ++) {
        await this.judgeService.write(Number(payload[i].judge_id), {userId: payload[i].user_id}).toPromise();
      }
      this.status = 'success';
    } catch (e) {
      console.log(e);
      this.status = 'failed';
    } finally {
      this.statusString = 'saved';
      this.isLoading = false;
    }
  }
  async clear(): Promise<any> {
    try {
      this.isLoading = true;
      for(let i = 1; i <= 12; i++) {
        await this.judgeService.write(i, {userId: 0}).toPromise();
      }
      this.status = 'success';
      this.assignedUsers = {};
    } catch (e) {
      console.log(e);
      this.status = 'failed';
    } finally {
      this.statusString = 'cleared';
      this.isLoading = false;
    }
  }
}
