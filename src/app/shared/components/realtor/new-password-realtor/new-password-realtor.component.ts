import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-password-realtor',
  templateUrl: './new-password-realtor.component.html',
  styleUrls: ['./new-password-realtor.component.scss'],
})
export class NewPasswordRealtorComponent implements OnInit {
  newPassword = new FormGroup({
    password1: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    password2: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor() {}

  ngOnInit(): void {}
}
