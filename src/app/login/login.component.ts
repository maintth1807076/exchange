import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  list: any;

  constructor(private service: AuthService, private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.service.login(this.formGroup.value);
  }

  createForm(): void {
    this.formGroup = this.formBuilder.group({
      email: '',
      password: '',
    });
  }
}
