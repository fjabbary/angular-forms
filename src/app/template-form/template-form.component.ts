import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent {
  passwordMatch: boolean = false;

  myForm = {
    fullname: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agree: false
  }

  onSubmit(f: any) {
    console.log(f.value);
  }

  checkMatchPassword() {
    if (this.myForm.password === this.myForm.confirmPassword) {
      this.passwordMatch = true;
    } else {
      this.passwordMatch = false;
    }
  }

  pass(el: any) {
    console.log(el);
  }
}
