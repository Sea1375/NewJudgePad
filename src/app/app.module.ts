import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JudgeLoginComponent } from './judge/judge-login/judge-login.component';
import { RegisterComponent } from './judge/register/register.component';
import { PadComponent } from './judge/pad/pad.component';
import { JudgeSelectionComponent } from './recorder/judge-selection/judge-selection.component';
import { JudgeListComponent } from './recorder/judge-list/judge-list.component';
import { ScoreComponent } from './recorder/score/score.component';
import { RecorderLoginComponent } from './recorder/recorder-login/recorder-login.component';
import { ResetComponent } from './judge/reset/reset.component';

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
    ResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
