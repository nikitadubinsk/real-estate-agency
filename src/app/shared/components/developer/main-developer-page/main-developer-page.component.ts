import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-developer-page',
  templateUrl: './main-developer-page.component.html',
  styleUrls: ['./main-developer-page.component.scss'],
})
export class MainDeveloperPageComponent implements OnInit {
  constructor(private router: Router) {}
  itemsLimit = 0;

  ngOnInit() {
    document.body.clientWidth > 850
      ? (this.itemsLimit = 10)
      : (this.itemsLimit = 0);
  }

  logout() {
    localStorage.removeItem('developer_id');
    this.router.navigate(['/']);
  }
}
