import { Component, Input, OnInit } from '@angular/core';

import { JudgeService } from '../../../core/services/judge.service';
import { Key } from '../../../core/models/key';
import { KEYS } from '../../../core/mock/keys';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  @Input() id: number;
  keys: Key[] = KEYS;
  isLoading = false;
  currentScore = 0;
  constructor(
    private judgeService: JudgeService
  ) { }

  ngOnInit(): void {
    console.log(this.keys);
  }

  setScore(key: number): void {
    this.currentScore = key === 0.5 ? this.currentScore + key : key;
  }

  clear(): void {
    this.currentScore = 0;
  }

  async send(): Promise<any> {
    try {
      this.isLoading = true;
      const result = await this.judgeService.write(this.id, {score: this.currentScore}).toPromise();
    } catch(e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }
}
