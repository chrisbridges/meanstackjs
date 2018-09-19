import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UserService, AlertService } from '../services';

@Component({
  selector: 'app-account',
  template: `
    <div class="container">
      <h2>Profile Information</h2>
      <form class="form-account" [formGroup]="accountForm" (ngSubmit)="updateProfile()">
        <div class="form-group row">
          <label for="account-email" class="col-form-label col-sm-2">Email</label>
          <div class="col-sm-6">
            <input type="email" class="form-control" id="account-email" aria-describedby="emailHelp">
          </div>
        </div>
        <div class="form-group row">
          <label for="account-name" class="col-form-label col-sm-2">Name</label>
          <div class="col-sm-6">
            <input type="text" class="form-control" id="account-name">
          </div>
        </div>
        <div class="row">
          <legend class="col-form-label col-sm-2">Gender</legend>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
            <label class="form-check-label" for="exampleRadios1">
              Male
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
            <label class="form-check-label" for="exampleRadios2">
              Female
            </label>
          </div>
        </div>
        <div class="form-group row">
          <label for="account-location" class="col-form-label col-sm-2">Location</label>
          <div class="col-sm-6">
            <input type="text" class="form-control" id="account-location">
          </div>
        </div>
        <div class="form-group row">
          <label for="account-website" class="col-form-label col-sm-2">Website</label>
          <div class="col-sm-6">
            <input type="text" class="form-control" id="account-website">
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-4 offset-sm-2">
            <button type="submit" class="btn btn-primary"><i class="fa fa-pencil"></i> Update Profile</button>
          </div>
        </div>
      </form>
      <form class="api-token-form" [formGroup]="apiTokenForm">
        <div class="form-group row">
          <label for="api-token" class="col-form-label col-sm-2">API Token</label>
          <textarea class="form-control col-sm-6" id="api-token" rows="5" disabled="disabled"></textarea>
        </div>
        <div class="form-group row">
          <div class="col-sm-4 offset-sm-2">
            <button type="submit" class="btn btn-info"><i class="fa fa-refresh"></i> Refresh API Token</button>
          </div>
        </div>
      </form>
    </div>
  `
})

export class AccountContainer implements OnInit {
  accountForm: FormGroup

  constructor (
    private formBuilder: FormBuilder,
    private userService: UserService,
    private alertService: AlertService
  ) {}

  ngOnInit () {
    // TODO: grab current account values and fill inputs accordingly
  }

  updateProfile () {
    // TODO: if values have changed, make PUT request
  }

  refreshToken () {
    // TODO: refresh API Token
  }
}
