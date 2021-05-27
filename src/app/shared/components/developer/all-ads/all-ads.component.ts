import { Component, OnInit } from '@angular/core';
import { TUI_DEFAULT_COLOR_HANDLER } from '@taiga-ui/addon-charts';

@Component({
  selector: 'app-all-ads',
  templateUrl: './all-ads.component.html',
  styleUrls: ['./all-ads.component.scss'],
})
export class AllAdsComponent implements OnInit {
  readonly value = [45, 1];
  readonly labels = ['Новых объявлений', 'Архивированных объявлений'];
  readonly colorHandler = TUI_DEFAULT_COLOR_HANDLER;
  activeItemIndex: number | null = null;

  constructor() {}

  ngOnInit(): void {}

  isItemActive(index: number): boolean {
    return this.activeItemIndex === index;
  }

  onHover(index: number, hovered: boolean) {
    this.activeItemIndex = hovered ? index : null;
  }
}
