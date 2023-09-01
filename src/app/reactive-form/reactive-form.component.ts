import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../shared/password.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  ngOnInit() {
    document.title = 'Reactive-Forms';
  }

  myForm: FormGroup;

  get fullnameField() {
    return this.myForm.get('fullname')!
  }
  get emailField() {
    return this.myForm.get('email')!
  }
  get phoneField() {
    return this.myForm.get('phone')!
  }
  get passwordField() {
    return this.myForm.get('password')!
  }
  get confirmPasswordField() {
    return this.myForm.get('confirmPassword')!
  }

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(12)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      agree: [false, [Validators.required]]
    }, { validator: passwordValidator })
  }

  onSubmit() {
    console.log(this.myForm);
  }

  passTemplate(fn: any) {
    console.log(fn);
  }


}
