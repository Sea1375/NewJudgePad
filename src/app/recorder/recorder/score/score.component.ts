import { Component, OnInit } from '@angular/core';

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

  private autoSaveInterval: number = setInterval( ()=>{
    this.readJudges();
  },3000);

  constructor(
    private judgeService: JudgeService
  ) { }

  ngOnInit(): void {
    this.getDiveCode();
    this.readJudges();
  }

  async getDiveCode(): Promise<any> {
    const result: {diveCode: string} =  await this.judgeService.getDiveCode().toPromise();
    this.diveCode = result.diveCode;
  }

  async saveDiveCode(): Promise<any> {
    console.log(this.diveCode);
    await this.judgeService.setDiveCode(this.diveCode).toPromise();
  }

  async readJudges(): Promise<any> {
    this.judges = await this.judgeService.readAll().toPromise();
    for(let i = 0; i < this.judges.length; i ++) {
      this.scores[i] = this.judges[i].score;
    }
  }

  async send(): Promise<any> {

  }
}
