import { Component, Input, OnInit } from '@angular/core';

import { JudgeService } from '../../../core/services/judge.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() id: number;
  isLoading = false;
  msgToRecorder: string;
  msgFromRecorder: string = '';

  private autoSaveInterval: number = setInterval( ()=>{
     this.readJudgeMsgFromRecorderById(this.id);
  },3000);

  constructor(
    private judgeService: JudgeService
  ) { }

  ngOnInit(): void {
  }

  clear(): void {
    this.msgToRecorder = '';
  }

  async send(): Promise<any> {
    try {
      this.isLoading = true;
      await this.judgeService.write(this.id, {msgToRecorder: this.msgToRecorder}).toPromise();
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

  async readJudgeMsgFromRecorderById(id: number): Promise<any> {
    const result: {msgFromRecorder: string} = await this.judgeService.readJudgeMsgFromRecorderById(id).toPromise();
    this.msgFromRecorder = result.msgFromRecorder;
  }

}
