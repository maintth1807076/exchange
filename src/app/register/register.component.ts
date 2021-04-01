import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private service: AuthService, private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.formGroup.patchValue({address: new Date().toString()});
    this.service.register(this.formGroup.value);
  }
  createForm(): void {
    this.formGroup = this.formBuilder.group({
      email: '',
      password: '',
      address: ''
    });
  }
}
