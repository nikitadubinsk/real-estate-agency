import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
})
export class AuthorizationComponent {
  auth = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  loading: boolean = false;

  public error$: Subject<string> = new Subject<string>();

  constructor(private userService: UserService, private router: Router) {}

  authorization() {
    this.loading = true;
    this.userService.auth(this.auth.value).subscribe(
      (res) => {
        localStorage['user_id'] = Object.values(res)[0];
        this.auth.reset();
        this.router.navigate(['/account']);
      },
      (error) => {
        this.error$.next(error.error.message);
        this.loading = false;
      }
    );
  }
}
