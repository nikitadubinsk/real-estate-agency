import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-realtor',
  templateUrl: './all-realtor.component.html',
  styleUrls: ['./all-realtor.component.scss'],
})
export class AllRealtorComponent implements OnInit {
  loading = false;
  search = '';

  constructor() {}

  ngOnInit(): void {}
}
