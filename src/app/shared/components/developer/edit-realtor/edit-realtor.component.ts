import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { DeveloperService } from 'src/app/shared/services/developer.service';
@Component({
  selector: 'app-edit-realtor',
  templateUrl: './edit-realtor.component.html',
  styleUrls: ['./edit-realtor.component.scss'],
})
export class EditRealtorComponent implements OnInit {
  @Input() realtor: any;
  public error$: Subject<string> = new Subject<string>();

  @Output() onEdit: EventEmitter<any> = new EventEmitter<any>();
  @Output() oncloseEditForm: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  editRealtor: any;
  loading = false;

  constructor(private developerService: DeveloperService) {}

  ngOnInit(): void {
    this.editRealtor = new FormGroup({
      id: new FormControl(this.realtor.id),
      email: new FormControl(this.realtor.email, [
        Validators.required,
        Validators.email,
      ]),
      //birthday: new FormControl(this.realtor.birthday, [Validators.required]),
      name: new FormControl(this.realtor.name, [Validators.required]),
      telephone: new FormControl(this.realtor.telephone, [Validators.required]),
    });
  }

  edit() {
    this.loading = true;
    this.developerService.editRealtor(this.editRealtor.value).subscribe(
      () => {
        this.realtor.email = this.editRealtor.value.email;
        this.realtor.name = this.editRealtor.value.name;
        this.realtor.telephone = this.editRealtor.value.telephone;
        this.onEdit.emit(this.realtor);
        this.oncloseEditForm.emit(false);
        this.loading = false;
      },
      (err) => {
        this.error$.next(err.error.message);
        this.loading = false;
      }
    );
  }
}
