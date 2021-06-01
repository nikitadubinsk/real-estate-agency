import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';
import { RealtorService } from 'src/app/shared/services/realtor.service';
import { UserService } from 'src/app/shared/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss'],
})
export class AdComponent implements OnInit {
  @Input() ad: any;
  @Input() isRealtor: boolean = false;
  @Input() isDeveloper: boolean = false;
  @Input() isLike: boolean = false;
  @Output() onLike: EventEmitter<number> = new EventEmitter<number>();
  userId: any;
  likes: any = [];

  height = 0;
  heightMini = 200;
  public error$: Subject<string> = new Subject<string>();
  loading = false;

  constructor(
    private realtorService: RealtorService,
    private userservice: UserService
  ) {}

  ngOnInit(): void {
    this.userId = localStorage['user_id'];
    if (localStorage['likes']) {
      this.likes = localStorage['likes'].split(',');
    }
    this.isLike = this.likes.find((el: any) => +el == +this.ad.id);
    if (this.ad.photo && !this.ad.photo.includes(environment.urlPicture)) {
      this.ad.photo = environment.urlPicture + this.ad.photo;
    }
    let el1 = document.getElementById('details');
    if (el1) {
      this.height = el1.clientHeight;
    }
    setTimeout(() => {
      let el2 = document.getElementById('photoMini');
      if (el2) {
        this.heightMini = el2.offsetHeight;
        console.log(this.heightMini);
      }
    }, 1000);
  }

  achive() {
    this.loading = true;
    this.realtorService
      .achive({
        id: this.ad.id,
        relevance: !this.ad.relevance,
      })
      .subscribe(
        () => {
          this.ad.relevance = !this.ad.relevance;
          this.loading = false;
        },
        (err) => {
          this.error$.next(err.error.message);
          this.loading = false;
        }
      );
  }

  like() {
    //this.onLike.emit(this.ad.id);
    this.isLike = !this.isLike;
    if (!this.isLike) {
      console.log(this.likes);
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
