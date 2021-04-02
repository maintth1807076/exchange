import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../service/auth.service";
import {AngularFirestore} from "@angular/fire/firestore";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  list: any;
  constructor(private service: AuthService, private formBuilder: FormBuilder, private afs: AngularFirestore) {
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
