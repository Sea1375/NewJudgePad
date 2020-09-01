import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { JudgeService } from '../../core/services/judge.service';
import { confirmPasswordValidator } from '../../core/utils/validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  isLoading = false;
  success: string = 'none';

  form: FormGroup = this.formBuilder.group({
    name:['', [Validators.required]],
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', [Validators.required, confirmPasswordValidator]],
  });

  /***
   * { firstName: string, lastName: string, address: { street, zip, code }}  formGroup
   * { firstName, lastName, clothes: [{ color, brand, id }, {color, brand, id}] }  formArray
   *
   *
   * @param judgeService
   * @param formBuilder
   */

  constructor(
    private judgeService: JudgeService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    /*this.form.valueChanges.subscribe(res => {
      console.log(res);
    });*/
  }

  async register(): Promise<any> {
    try {
      this.isLoading = true;
      this.success = 'none';
      console.log(this.form.value.name);
      const result:{status: boolean} = await this.judgeService.register({
        name: this.form.value.name,
        username: this.form.value.username,
        email: this.form.value.email,
        password: this.form.value.password
      }).toPromise();
      this.success = result.status ? 'success' : 'failed';
    } catch (e) {
      this.success = 'failed';
    } finally {
      this.isLoading = false;
    }
  }
}
