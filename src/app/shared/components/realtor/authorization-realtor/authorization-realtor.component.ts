import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { RealtorService } from 'src/app/shared/services/realtor.service';

@Component({
  selector: 'app-authorization-realtor',
  templateUrl: './authorization-realtor.component.html',
  styleUrls: ['./authorization-realtor.component.scss'],
})
export class AuthorizationRealtorComponent {
  auth = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(''),
  });

  loading: boolean = false;

  public error$: Subject<string> = new Subject<string>();

  constructor(private realtorService: RealtorService, private router: Router) {}

  authorize() {
    this.loading = true;
    if (this.auth.value.password) {
      this.realtorService.authorize(this.auth.value).subscribe(
        (res) => {
          console.log(res);
          localStorage['realtor_id'] = Object.values(res)[0];
          this.auth.reset();
          this.router.navigate(['/realtor']);
          this.loading = false;
        },
        (error) => {
          this.error$.next(error.error.message);
          this.loading = false;
        }
      );
    } else {
      this.realtorService.findRealtor(this.auth.value).subscribe(
        (res) => {
          console.log(res);
          localStorage['realtor_id'] = Object.values(res)[0];
          this.auth.reset();
          this.router.navigate(['/realtor/login/new-password']);
          this.loading = false;
        },
        (error) => {
          this.error$.next(error.error.message);
          this.loading = false;
        }
      );
    }
  }
}
