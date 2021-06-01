import { Component, OnInit } from '@angular/core';
import { TUI_DEFAULT_COLOR_HANDLER } from '@taiga-ui/addon-charts';
import { DeveloperService } from 'src/app/shared/services/developer.service';

@Component({
  selector: 'app-all-ads',
  templateUrl: './all-ads.component.html',
  styleUrls: ['./all-ads.component.scss'],
})
export class AllAdsComponent implements OnInit {
  value: any = [];
  readonly labels = ['Новых объявлений', 'Архивированных объявлений'];
  readonly colorHandler = TUI_DEFAULT_COLOR_HANDLER;
  activeItemIndex: number | null = null;
  loading = true;
  ads: any;

  constructor(private developerService: DeveloperService) {}

  ngOnInit(): void {
    this.developerService.statistics(localStorage['developer_id']).subscribe(
      (res) => {
        this.value[0] = Object.values(res)[0];
        this.value[1] = Object.values(res)[1];
        this.loading = false;
      },
      (err) => {
        this.loading = false;
        console.log(err);
      }
    );
    this.developerService.ads(localStorage['developer_id']).subscribe(
      (res) => {
        this.ads = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  isItemActive(index: number): boolean {
    return this.activeItemIndex === index;
  }

  onHover(index: number, hovered: boolean) {
    this.activeItemIndex = hovered ? index : null;
  }
}
