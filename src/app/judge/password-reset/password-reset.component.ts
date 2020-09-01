import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { confirmPasswordValidator } from '../../core/utils/validators';
import { JudgeService } from '../../core/services/judge.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {

  isLoading = false;
  status: string = 'none';

  form: FormGroup = this.formBuilder.group({
    password: ['', Validators.required],
    confirmPassword: ['', [Validators.required, confirmPasswordValidator]],
  });

  constructor(
    private judgeService: JudgeService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  async reset(): Promise<any> {
    try {
      this.isLoading = true;
      this.status = 'none';
      const result:{status: boolean} = await this.judgeService.reset({
        token: this.route.snapshot.params.randomString,
        password: this.form.value.password
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
