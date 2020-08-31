  import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { JudgeService } from '../../../core/services/judge.service';
import { Judge } from '../../../core/models/judge';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  diveCode: string;
  judges: Judge[];
  scores: number[] = [];
  msgFromRecorder: string = '';
  selectedJudgeId: string;
  allPlusJudges: {
    id: number,
    judgeNumber: string,
    msgFromRecorder: string
  }[] = [];

  private autoSaveInterval: number = setInterval( ()=>{
    this.readJudges();
  },3000);

  constructor(
    private judgeService: JudgeService
  ) { }

  ngOnInit(): void {
    this.getDiveCode();
    this.readJudges();
    this.readAllPlusJudges();
  }

  async getDiveCode(): Promise<any> {
    try {
      this.diveCode = await this.judgeService.getDiveCode().pipe(map(res => res.diveCode)).toPromise();
    } catch (e) {
      console.log(e);
    }
  }

  async saveDiveCode(): Promise<any> {
    try {
      await this.judgeService.setDiveCode(this.diveCode).toPromise();
    } catch (e) {
      console.log(e);
    }
  }

  async readJudges(): Promise<any> {
    this.judges = await this.judgeService.readAll().toPromise();
    this.scores = this.judges.map(judge => judge.score);
  }

  async readAllPlusJudges(): Promise<any> {
    this.allPlusJudges.push({
      id: 0,
      judgeNumber: 'All',
      msgFromRecorder: ''
    });
    this.allPlusJudges = this.allPlusJudges.concat(await this.judgeService.readAllPlusJudges().toPromise());
  }
  async send(): Promise<any> {
    try {
      if(this.selectedJudgeId === '0') {
        for(let i = 1; i < this.allPlusJudges.length; i++) {
          await this.judgeService.write(this.allPlusJudges[i].id, {msgFromRecorder: this.msgFromRecorder}).toPromise();
        }
      } else {
        await this.judgeService.write(Number(this.selectedJudgeId), {msgFromRecorder: this.msgFromRecorder}).toPromise();
      }
      alert("success!");
    } catch(e) {
      console.log(e);
    }
  }
}
