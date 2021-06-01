import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-realtor-ad',
  templateUrl: './main-realtor-ad.component.html',
  styleUrls: ['./main-realtor-ad.component.scss'],
})
export class MainRealtorAdComponent implements OnInit {
  constructor(private router: Router) {}
  activeItemIndex = 0;
  itemsLimit = 0;

  ngOnInit() {
    document.body.clientWidth > 850
      ? (this.itemsLimit = 10)
      : (this.itemsLimit = 0);
  }

  logout() {
    localStorage.removeItem('realtor_id');
    this.router.navigate(['/']);
  }
}
