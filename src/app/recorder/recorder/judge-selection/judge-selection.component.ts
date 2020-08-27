import { Component, OnInit } from '@angular/core';
import { Judge } from '../../../core/models/judge';
import { JudgeService } from '../../../core/services/judge.service';

@Component({
  selector: 'app-judge-selection',
  templateUrl: './judge-selection.component.html',
  styleUrls: ['./judge-selection.component.scss']
})
export class JudgeSelectionComponent implements OnInit {

  judges: Judge[] = [];
  usernames: {
    name: string
  }[];
  nameArray = [];
  cursor = [];
  searchText = [];

  constructor(
    private judgeService: JudgeService
  ) { }

  ngOnInit(): void {
    this.readJudges();
    this.readUsernames();
    for(let i = 0; i < 12; i ++) {
      this.cursor[i] = false;
      this.searchText[i] = '';
    }
  }

  async readJudges(): Promise<any> {
    this.judges = await this.judgeService.readAll().toPromise();
  }

  async readUsernames(): Promise<any> {
    this.usernames = await this.judgeService.readUsernames().toPromise();
    for(let i = 0; i < this.usernames.length; i++) {
      this.nameArray.push(this.usernames[i].name);
    }
  }

  setCursor(id: number): void {
    this.cursor[id] = true;
  }

  blurCursor(id: number): void {
    this.cursor[id] = false;
  }

  putValue(id: number, nameId: number, username: string) {
    this.judges[id].userId = nameId;
  }

}
