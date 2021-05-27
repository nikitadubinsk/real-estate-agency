import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-authorization-realtor',
  templateUrl: './authorization-realtor.component.html',
  styleUrls: ['./authorization-realtor.component.scss'],
})
export class AuthorizationRealtorComponent implements OnInit {
  auth = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}
}
