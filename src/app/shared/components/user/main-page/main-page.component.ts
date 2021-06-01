import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TuiOrientation } from '@taiga-ui/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  findAd = new FormGroup({
    type_apartament: new FormControl(''),
    type_ad: new FormControl(''),
    size: new FormControl(''),
    priceFrom: new FormControl(''),
    priceTo: new FormControl(''),
  });
  readonly type_apartament = ['Квартира', 'Студия', 'Частный дом'];
  readonly type_ad = ['Продажа', 'Аренда'];
  ads: any;
  ad: any;
  isWithMap = false;
  isAll = false;
  loading = false;
  userId = 0;
  orientation: TuiOrientation = TuiOrientation.Horizontal;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userId = localStorage['user_id'];
    console.log(document.body.clientWidth);
    document.body.clientWidth > 850
      ? (this.orientation = TuiOrientation.Horizontal)
      : (this.orientation = TuiOrientation.Vertical);
  }

  findAllAd() {
    this.loading = true;
    this.isAll = true;
    this.isWithMap = false;
    this.findAds(this.findAd.value);
  }

  onMap() {
    this.loading = true;
    this.isWithMap = true;
    this.isAll = false;
    this.findAds(this.findAd.value);
  }

  private findAds(obj: any) {
    if (!obj.type_apartament) {
      obj.type_apartament = ['Квартира', 'Студия', 'Частный дом'];
    } else {
      obj.type_apartament = [obj.type_apartament];
    }
    if (!obj.type_ad) {
      obj.type_ad = ['Продажа', 'Аренда'];
    } else {
      obj.type_ad = [obj.type_ad];
    }
    if (!obj.size) {
      obj.size = 0;
    }
    if (!obj.priceTo) {
      obj.priceTo = 1000000000000;
    }
    if (!obj.priceFrom) {
      obj.priceFrom = 0;
    }
    this.userService.ads(obj).subscribe(
      (res) => {
        console.log(res);
        this.ads = res;
        this.loading = false;
      },
      (err) => {
        this.loading = false;
      }
    );
  }

  login() {
    this.router.navigate(['/login']);
  }

  account() {
    this.router.navigate(['/account']);
  }
}
