import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { RealtorService } from 'src/app/shared/services/realtor.service';

@Component({
  selector: 'app-all-realtor-ads',
  templateUrl: './all-realtor-ads.component.html',
  styleUrls: ['./all-realtor-ads.component.scss'],
})
export class AllRealtorAdsComponent implements OnInit {
  ads: any;
  loading: boolean = false;
  public error$: Subject<string> = new Subject<string>();

  isSortPrice = false;
  isSortCreatedAt = false;

  isSortPriceTouched = true;
  isSortCreatedAtTouched = true;

  sortPriceIndex = 0;
  sortCreatedAtIndex = 0;

  sortPriceUp = true;
  sortCreatedAtUp = true;
  search = '';

  constructor(private realtorService: RealtorService) {}

  ngOnInit(): void {
    this.loading = true;
    this.realtorService.ads(localStorage['realtor_id']).subscribe(
      (res) => {
        this.ads = res;
        console.log(this.ads);
        this.loading = false;
      },
      (err) => {
        this.error$.next(err.error);
        this.loading = false;
      }
    );
  }

  sortPrice() {
    if (this.sortPriceUp) {
      this.ads.sort((a: any, b: any) => {
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        return 0;
      });
    } else {
      this.ads.sort((a: any, b: any) => {
        if (a.price < b.price) {
          return 1;
        }
        if (a.price > b.price) {
          return -1;
        }
        return 0;
      });
    }
    this.sortPriceUp = !this.sortPriceUp;
    this.isSortPrice = true;
    this.isSortCreatedAt = false;
    if (this.sortPriceIndex != 0) {
      this.isSortPriceTouched = !this.isSortPriceTouched;
    }
    this.sortPriceIndex++;
    this.sortCreatedAtIndex = 0;
  }

  sortCreatedAt() {
    if (this.sortCreatedAtUp) {
      this.ads.sort((a: any, b: any) => {
        if (a.createdAt < b.createdAt) {
          return 1;
        }
        if (a.createdAt > b.createdAt) {
          return -1;
        }
        return 0;
      });
    } else {
      this.ads.sort((a: any, b: any) => {
        if (a.createdAt > b.createdAt) {
          return 1;
        }
        if (a.createdAt < b.createdAt) {
          return -1;
        }
        return 0;
      });
    }
    this.sortCreatedAtUp = !this.sortCreatedAtUp;
    this.isSortCreatedAt = true;
    this.isSortPrice = false;
    if (this.sortCreatedAtIndex != 0) {
      this.isSortCreatedAtTouched = !this.isSortCreatedAtTouched;
    }
    this.sortCreatedAtIndex++;
    this.sortPriceIndex = 0;
  }
}
