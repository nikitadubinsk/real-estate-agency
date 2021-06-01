import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DeveloperService } from 'src/app/shared/services/developer.service';

@Component({
  selector: 'app-all-realtor',
  templateUrl: './all-realtor.component.html',
  styleUrls: ['./all-realtor.component.scss'],
})
export class AllRealtorComponent implements OnInit {
  loading = false;
  search = '';
  realtors: any;
  realtor: any;
  isEdit = false;
  public error$: Subject<string> = new Subject<string>();
  public success$: Subject<string> = new Subject<string>();

  constructor(private developerService: DeveloperService) {}

  ngOnInit(): void {
    this.loading = true;
    this.developerService
      .realtors({ developer_id: localStorage['developer_id'] })
      .subscribe((res) => {
        this.realtors = res;
        console.log(this.realtors);
        this.loading = false;
      });
  }

  delete(id: number) {
    this.developerService.deleteRealtor(id).subscribe(
      () => {
        let index = this.realtors.findIndex((el: any) => el.id == id);
        this.realtors.splice(index, 1);
        this.success$.next('Вы успешно удалили риэлтора');
      },
      (err) => {
        this.error$.next(err.error.message);
        this.loading = false;
      }
    );
  }

  edit(realtor: any) {
    this.isEdit = true;
    this.realtor = realtor;
  }

  editRealtor(realtor: any) {
    this.loading;
  }

  closeEdit(flag: boolean) {
    this.isEdit = flag;
  }
}
