import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { RealtorService } from 'src/app/shared/services/realtor.service';

@Component({
  selector: 'app-new-password-realtor',
  templateUrl: './new-password-realtor.component.html',
  styleUrls: ['./new-password-realtor.component.scss'],
})
export class NewPasswordRealtorComponent {
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

  loading: boolean = false;

  public error$: Subject<string> = new Subject<string>();

  constructor(private realtorService: RealtorService, private router: Router) {}

  savePassword() {
    this.loading = true;
    this.realtorService
      .newPassword({
        id: localStorage['realtor_id'],
        password: this.newPassword.value.password1,
      })
      .subscribe(
        () => {
          this.newPassword.reset();
          this.router.navigate(['/realtor']);
          this.loading = false;
        },
        (error) => {
          this.error$.next(error.error.message);
          this.loading = false;
        }
      );
  }
}
