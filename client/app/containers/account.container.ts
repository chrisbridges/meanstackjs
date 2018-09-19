import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UserService, AlertService } from '../services';
// TODO: need to get routing for component squared away
@Component({
  selector: 'app-account',
  template: `
    <div class="container">
      <h2>Profile Information</h2>
      <form class="form-account" [formGroup]="accountForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="account-email">Email</label>
          <input type="email" class="form-control" id="account-email" aria-describedby="emailHelp" placeholder="Enter email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="account-name">Name</label>
          <input type="text" class="form-control" id="account-name" placeholder="Name">
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
    // TODO: grab current account values and fill inputs accordingly
  }

  onSubmit () {
    // TODO: if values have changed, make PUT request
  }
}
