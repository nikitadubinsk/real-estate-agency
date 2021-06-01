import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  ads: any;
  loading = true;
  account: any;

  constructor(private userservice: UserService) {}

  ngOnInit(): void {
    this.userservice.account(localStorage['user_id']).subscribe((res) => {
      this.account = res;
      localStorage['likes'] = this.account.likes;
    });
    this.userservice.likesAd(localStorage['user_id']).subscribe((res) => {
      this.ads = res;
      this.loading = false;
    });
  }

  like(id: number) {
    console.log(id);
  }
}
