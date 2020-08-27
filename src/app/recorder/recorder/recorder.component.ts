import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recorder',
  templateUrl: './recorder.component.html',
  styleUrls: ['./recorder.component.scss']
})
export class RecorderComponent implements OnInit {

  selectedPage: string;
  constructor() { }

  ngOnInit(): void {
    this.selectedPage = 'scoresPage';
  }

  select(page: string): void {
    this.selectedPage = page;
  }
}
