import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JudgeComponent } from './judge/judge.component';
import { RecorderComponent } from './recorder/recorder.component';
import { JudgeLoginComponent } from './judge/judge-login/judge-login.component';
import { RegisterComponent } from './judge/register/register.component';
import { PadComponent } from './judge/pad/pad.component';
import { JudgeSelectionComponent } from './recorder/judge-selection/judge-selection.component';
import { JudgeListComponent } from './recorder/judge-list/judge-list.component';
import { ScoreComponent } from './recorder/score/score.component';
import { RecorderLoginComponent } from './recorder/recorder-login/recorder-login.component';

@NgModule({
  declarations: [
    AppComponent,
    JudgeComponent,
    RecorderComponent,
    JudgeLoginComponent,
    RegisterComponent,
    PadComponent,
    JudgeSelectionComponent,
    JudgeListComponent,
    ScoreComponent,
    RecorderLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
