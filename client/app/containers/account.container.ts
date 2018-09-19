import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UserService, AlertService } from '../services';

@Component({
  selector: 'app-account',
  template: `
    <div class="container">
      <h2>Profile Information</h2>
      <form class="form-account" [formGroup]="accountForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  `
})

export class AccountContainer {
  accountForm: FormGroup

  constructor (
    private formBuilder: FormBuilder,
    private userService: UserService,
    private alertService: AlertService
  ) {}

  ngOnInit () {

  }

  onSubmit () {
    
  }
}
