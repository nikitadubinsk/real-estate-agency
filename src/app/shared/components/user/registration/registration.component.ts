import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
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

  loading: boolean = false;

  public error$: Subject<string> = new Subject<string>();

  constructor(private userService: UserService, private router: Router) {}

  registrate() {
    this.loading = true;
    this.userService.registration(this.registration.value).subscribe(
      (res) => {
        localStorage['user_id'] = Object.values(res)[0];
        this.registration.reset();
        this.router.navigate(['/account']);
      },
      (err) => {
        this.error$.next(err.error.message);
        this.loading = false;
      }
    );
  }
}
