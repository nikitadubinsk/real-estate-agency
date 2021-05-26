import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-authorization-developer',
  templateUrl: './authorization-developer.component.html',
  styleUrls: ['./authorization-developer.component.scss'],
})
export class AuthorizationDeveloperComponent implements OnInit {
  auth = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor() {}

  ngOnInit(): void {}
}
