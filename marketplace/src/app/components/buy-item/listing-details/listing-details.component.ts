import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item, ItemResponse } from 'src/app/models/item';
import { RetrieveItemService } from 'src/app/services/retrieve-item.service';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.css']
})
export class ListingDetailsComponent implements OnInit {
  @Output() switch: EventEmitter<string> = new EventEmitter();
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

  onChat(): void {
    this.switch.emit('chat');
  }

  onPrev(): void {
    this.switch.emit('prev');
  }
}
