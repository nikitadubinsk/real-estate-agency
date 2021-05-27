import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DeveloperService } from 'src/app/shared/services/developer.service';

@Component({
  selector: 'app-authorization-developer',
  templateUrl: './authorization-developer.component.html',
  styleUrls: ['./authorization-developer.component.scss'],
})
export class AuthorizationDeveloperComponent {
  auth = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
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

  autherization() {
    this.loading = true;
    this.developerService.auth(this.auth.value).subscribe(
      (res) => {
        localStorage['developer_id'] = Object.values(res)[0];
        this.auth.reset();
        this.router.navigate(['/developer']);
      },
      (error) => this.error$.next(error.error.message)
    );
    this.loading = false;
  }
}
