import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DeveloperService } from 'src/app/shared/services/developer.service';

@Component({
  selector: 'app-registration-developer',
  templateUrl: './registration-developer.component.html',
  styleUrls: ['./registration-developer.component.scss'],
})
export class RegistrationDeveloperComponent {
  registration = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    description: new FormControl('', [
      Validators.required,
      Validators.maxLength(65534),
    ]),
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  loading: boolean = false;

  public error$: Subject<string> = new Subject<string>();

  constructor(
    private developerService: DeveloperService,
    private router: Router
  ) {}

  registrate() {
    this.loading = true;
    this.developerService.registrate(this.registration.value).subscribe(
      (res) => {
        localStorage['developer_id'] = Object.values(res)[0];
        this.registration.reset();
        this.router.navigate(['/developer']);
      },
      (error) => this.error$.next(error.error.message)
    );
    this.loading = false;
  }
}
