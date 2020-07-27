import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item, ItemResponse } from '../../models/item';
import { RetrieveItemService } from '../../services/retrieve-item.service';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-buy-item',
  templateUrl: './buy-item.component.html',
  styleUrls: ['./buy-item.component.css']
})
export class BuyItemComponent implements OnInit {
  @Output() messageClicked: EventEmitter<Item> = new EventEmitter();
  items: Item[];
  constructor(private readonly chatService: ChatService) {
  }
  pages = ['browse', 'details'];
  selectedIndex = 0;

  ngOnInit(): void {
  }

  handleOnSwitch(value: string) {
    if (value === 'prev' && this.selectedIndex > 0) {
      this.selectedIndex--;
    } else if (value === 'next') {
      this.selectedIndex = (this.selectedIndex + 1) % this.pages.length;
    }
  }

  handleMessageButtonClicked(item: Item) {
    this.messageClicked.emit(item);
  }
}
