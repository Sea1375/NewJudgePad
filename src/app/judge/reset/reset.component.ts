import { Component, OnInit } from '@angular/core';
import { JudgeService } from '../../core/services/judge.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  isLoading = false;
  status: string = 'none';
  form: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(
    private judgeService: JudgeService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  async send(): Promise<any> {
    try {
      this.isLoading = true;
      this.status = 'none';
      const result: { status: boolean }  = await this.judgeService.sendEmail({
        email: this.form.value.email,
      }).toPromise();
      this.status = result.status ? 'success' : 'failed';
    } catch (e) {
      console.log(e);
      this.status = 'failed';
    } finally {
      this.isLoading = false;
    }
  }
}
