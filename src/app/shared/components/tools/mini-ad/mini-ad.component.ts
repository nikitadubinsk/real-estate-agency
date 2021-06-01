import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-mini-ad',
  templateUrl: './mini-ad.component.html',
  styleUrls: ['./mini-ad.component.scss'],
})
export class MiniAdComponent implements OnInit {
  @Input() ad: any;
  userId = 0;
  likes: any = [];
  isLike: boolean = false;

  constructor(private userservice: UserService) {}

  ngOnInit(): void {
    this.userId = localStorage['user_id'];
    if (localStorage['likes']) {
      this.likes = localStorage['likes'].split(',');
    }
    this.isLike = this.likes.find((el: any) => +el == +this.ad.id);
  }

  like() {
    this.isLike = !this.isLike;
    if (!this.isLike) {
      let index = this.likes.findIndex((el: any) => +el == +this.ad.id);
      this.likes.splice(index, 1);
      localStorage['likes'] = this.likes;
    } else {
      this.likes.push(this.ad.id);
      localStorage['likes'] = this.likes;
    }
    this.userservice
      .changeLike({
        id: this.userId,
        likes: this.likes.join(','),
      })
      .subscribe();
  }
}
