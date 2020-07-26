import { Component, OnInit } from '@angular/core';
import { Item, ItemResponse } from '../../models/item';
import { RetrieveItemService } from '../../services/retrieve-item.service';

@Component({
  selector: 'app-buy-item',
  templateUrl: './buy-item.component.html',
  styleUrls: ['./buy-item.component.css']
})
export class BuyItemComponent implements OnInit {
  pages = ['browse', 'details'];
  selectedIndex = 0;
  constructor() { }

  ngOnInit(): void {
  }

  handleOnSwitch(value: string) {
    console.log(value);
    if (value === 'prev' && this.selectedIndex > 0) {
      this.selectedIndex--;
    } else if (value === 'next') {
      this.selectedIndex = (this.selectedIndex + 1) % this.pages.length;
    }
  }
}
