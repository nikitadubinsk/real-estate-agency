import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-developer',
  templateUrl: './registration-developer.component.html',
  styleUrls: ['./registration-developer.component.scss'],
})
export class RegistrationDeveloperComponent implements OnInit {
  registration = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    birthday: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    personalData: new FormControl(false, [
      Validators.required,
      Validators.requiredTrue,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor() {}

  ngOnInit(): void {}
}
