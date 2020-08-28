import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JudgeLoginComponent } from './judge/judge-login/judge-login.component';
import { RegisterComponent } from './judge/register/register.component';
import { PadComponent } from './judge/pad/pad.component';
import { JudgeSelectionComponent } from './recorder/recorder/judge-selection/judge-selection.component';
import { JudgeListComponent } from './recorder/recorder/judge-list/judge-list.component';
import { ScoreComponent } from './recorder/recorder/score/score.component';
import { RecorderLoginComponent } from './recorder/recorder-login/recorder-login.component';
import { ResetComponent } from './judge/reset/reset.component';
import { SummaryComponent } from './judge/pad/summary/summary.component';
import { KeyboardComponent } from './judge/pad/keyboard/keyboard.component';
import { MessageComponent } from './judge/pad/message/message.component';
import { RecorderComponent } from './recorder/recorder/recorder.component';

@NgModule({
  declarations: [
    AppComponent,
    JudgeLoginComponent,
    RegisterComponent,
    PadComponent,
    JudgeSelectionComponent,
    JudgeListComponent,
    ScoreComponent,
    RecorderLoginComponent,
    ResetComponent,
    SummaryComponent,
    KeyboardComponent,
    MessageComponent,
    RecorderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
