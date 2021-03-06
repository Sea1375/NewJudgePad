import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JudgeLoginComponent } from './judge/judge-login/judge-login.component';
import { RegisterComponent } from "./judge/register/register.component";
import { PadComponent } from "./judge/pad/pad.component";
import { RecorderLoginComponent } from "./recorder/recorder-login/recorder-login.component";
import { JudgeSelectionComponent } from "./recorder/recorder/judge-selection/judge-selection.component";
import { JudgeListComponent } from './recorder/recorder/judge-list/judge-list.component';
import { ScoreComponent } from './recorder/recorder/score/score.component';
import { ResetComponent } from './judge/reset/reset.component';
import { RecorderComponent } from './recorder/recorder/recorder.component';
import { JudgeGuard } from './core/guards/judge.guard';
import { RecorderGuard } from './core/guards/recorder.guard';
import { PasswordResetComponent } from './judge/password-reset/password-reset.component';

const routes: Routes = [
  { path: '', redirectTo: '/judge/login', pathMatch: 'full' },
  { path: 'judge/login', component: JudgeLoginComponent },
  { path: 'judge/register', component: RegisterComponent },
  { path: 'judge/reset', component: ResetComponent },
  { path: 'judge/password-reset/:randomString', component:PasswordResetComponent },
  { path: 'judge/pad/:id', component: PadComponent, canActivate: [JudgeGuard] },
  { path: 'recorder', redirectTo: '/recorder/login', pathMatch: 'full' },
  { path: 'recorder/login', component: RecorderLoginComponent },
  { path: 'recorder/recorder', component: RecorderComponent, canActivate: [RecorderGuard] },
  { path: 'recorder/judge-selection', component: JudgeSelectionComponent, canActivate: [RecorderGuard] },
  { path: 'recorder/judge-list', component: JudgeListComponent, canActivate: [RecorderGuard] },
  { path: 'recorder/score', component: ScoreComponent, canActivate: [RecorderGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
