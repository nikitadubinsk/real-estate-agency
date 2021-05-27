import { Component, OnInit } from '@angular/core';
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
}
