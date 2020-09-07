import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recorder',
  templateUrl: './recorder.component.html',
  styleUrls: ['./recorder.component.scss']
})
export class RecorderComponent implements OnInit {

  selectedPage: string;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.selectedPage = 'scoresPage';
  }

  select(page: string): void {
    this.selectedPage = page;
  }

  logout(): void {
    this.router.navigate(['recorder/login']);
  }
}
