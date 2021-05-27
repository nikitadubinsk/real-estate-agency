import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { DeveloperService } from 'src/app/shared/services/developer.service';

@Component({
  selector: 'app-new-realtor',
  templateUrl: './new-realtor.component.html',
  styleUrls: ['./new-realtor.component.scss'],
})
export class NewRealtorComponent {
  newRealtor = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    birthday: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    telephone: new FormControl('', [Validators.required]),
    developer_id: new FormControl(localStorage['developer_id']),
  });

  public error$: Subject<string> = new Subject<string>();
  public success$: Subject<string> = new Subject<string>();

  constructor(private developerService: DeveloperService) {}

  createRealtor() {
    console.log(this.newRealtor.value);
    this.developerService.newRealtor(this.newRealtor.value).subscribe(
      (res) => {
        this.newRealtor.reset();
        this.success$.next(`Вы успешно добавили нового риэлтора`);
        console.log(res);
      },
      (err) => this.error$.next(err.error)
    );
  }
}
