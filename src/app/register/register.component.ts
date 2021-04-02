import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private service: AuthService, private formBuilder: FormBuilder, private appComponent: AppComponent) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.formGroup.patchValue({address: this.appComponent.isAddress});
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
