import { Component, OnInit, ViewChild } from '@angular/core';
import { BuyItemComponent } from '../buy-item/buy-item.component';
import { SellItemComponent } from '../sell-item/sell-item.component';

@Component({
  selector: 'app-user-actions',
  templateUrl: './user-actions.component.html',
  styleUrls: ['./user-actions.component.css']
})
export class UserActionsComponent implements OnInit {
  @ViewChild('buyItemPage') buyItem: BuyItemComponent;
  @ViewChild('sellItemPage') sellItem: SellItemComponent;
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
