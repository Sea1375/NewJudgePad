import { Component, OnInit } from '@angular/core';
import { JudgeService } from '../../core/services/judge.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { confirmPasswordValidator } from '../../core/utils/validators';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  isLoading = false;
  success: string = 'none';
  form: FormGroup = this.formBuilder.group({
    oldUsername: ['', Validators.required],
    oldPassword: ['', Validators.required],
    name:['', [Validators.required]],
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', [Validators.required, confirmPasswordValidator]],
  });

  constructor(
    private judgeService: JudgeService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  async reset(): Promise<any> {
    try {
      this.isLoading = true;
      this.success = 'none';
      console.log(this.form.value.name);
      const result: { status: boolean }  = await this.judgeService.reset({
        oldUsername: this.form.value.oldUsername,
        oldPassword: this.form.value.oldPassword,
        name: this.form.value.name,
        username: this.form.value.username,
        email: this.form.value.email,
        password: this.form.value.password
      }).toPromise();
      if(result.status) {
        this.success = 'success';
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
