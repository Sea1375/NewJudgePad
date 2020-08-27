import { Component, OnInit } from '@angular/core';
import { Judge } from '../../../core/models/judge';
import { JudgeService } from '../../../core/services/judge.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  status: boolean = false;
  judges: Judge[];
  scores: number[] = [];

  private autoSaveInterval: number = setInterval( ()=>{
    this.readJudges();
  },3000);

  constructor(
    private judgeService: JudgeService
  ) { }

  ngOnInit(): void {
  }

  async readJudges(): Promise<any> {
    this.judges = await this.judgeService.readAll().toPromise();
    for(let i = 0; i < this.judges.length; i ++) {
      this.scores[i] = 0;
      if(this.judges[i].userId != 0) {
        if(this.judges[i].score == 0) {
          return;
        } else {
          this.scores[i] = this.judges[i].score;
        }
      }
    }
    this.status = true;
  }
}
