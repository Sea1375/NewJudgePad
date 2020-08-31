import { Component, OnInit } from '@angular/core';
import { JudgeService } from '../../core/services/judge.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { confirmPasswordValidator } from '../../core/utils/validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  isLoading = false;
  success: string = 'none';
  form: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', [Validators.required, confirmPasswordValidator]],
  });

  constructor(
    private judgeService: JudgeService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async reset(): Promise<any> {
    try {
      this.isLoading = true;
      this.success = 'none';

      const result: { status: boolean }  = await this.judgeService.reset({
        email: this.form.value.email,
        password: this.form.value.password
      }).toPromise();

      if(result.status) {
        this.success = 'success';
        //this.router.navigate(['judge/login']);
      } else {
        this.success = 'notExist';
      }
    } catch (e) {
      this.success = 'failed';
    } finally {
      this.isLoading = false;
    }
  }
}
