import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {JudgeLoginComponent} from "./judge/judge-login/judge-login.component";
import {RegisterComponent} from "./judge/register/register.component";
import {PadComponent} from "./judge/pad/pad.component";
import {RecorderLoginComponent} from "./recorder/recorder-login/recorder-login.component";
import {JudgeSelectionComponent} from "./recorder/judge-selection/judge-selection.component";
import {JudgeListComponent} from "./recorder/judge-list/judge-list.component";
import {ScoreComponent} from "./recorder/score/score.component";

const routes: Routes = [
  { path: 'judge/login', component: JudgeLoginComponent },
  { path: 'judge/register', component: RegisterComponent },
  { path: 'judge/pad', component: PadComponent },
  { path: 'recorder/login', component: RecorderLoginComponent },
  { path: 'recorder/judge-selection', component: JudgeSelectionComponent },
  { path: 'recorder/judge-list', component: JudgeListComponent },
  { path: 'recorder/score', component: ScoreComponent },
  { path: '', redirectTo: '/judge/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
