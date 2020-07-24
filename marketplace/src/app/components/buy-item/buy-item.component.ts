import { Component, OnInit } from '@angular/core';
import { Item, ItemResponse } from '../../models/item';
import { RetrieveItemService } from '../../services/retrieve-item.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-buy-item',
  templateUrl: './buy-item.component.html',
  styleUrls: ['./buy-item.component.css']
})
export class BuyItemComponent implements OnInit {
  items: Item[];
  constructor(private readonly itemService: RetrieveItemService) {
     this.loadAllItems();
  }

  ngOnInit(): void {
    
  }

  loadAllItems(): void {
    this.itemService.getItems().subscribe((responses: ItemResponse) =>{
      this.items = responses.items;   
    });
  }
}
