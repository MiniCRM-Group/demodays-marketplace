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
  @Output() onItemClicked: EventEmitter<Item> = new EventEmitter();
  items: Item[];
  constructor(private readonly itemService: RetrieveItemService, private readonly chatService: ChatService) {
     this.loadAllItems();
  }

  ngOnInit(): void {
  }

  loadAllItems(): void {
    this.itemService.getItems().subscribe((responses: ItemResponse) =>{
      this.items = responses.items;
    });
  }

  handleMessageButtonClicked(item: Item) {
    this.chatService.createConversation(item);
    this.onItemClicked.emit(item);
  }
}
