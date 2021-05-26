import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-realtor',
  templateUrl: './new-realtor.component.html',
  styleUrls: ['./new-realtor.component.scss'],
})
export class NewRealtorComponent implements OnInit {
  newRealtor = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    birthday: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    telephone: new FormControl('', [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {}
}
