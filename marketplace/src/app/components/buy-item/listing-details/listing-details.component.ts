import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item, ItemResponse } from 'src/app/models/item';
import { RetrieveItemService } from 'src/app/services/retrieve-item.service';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.css']
})
export class ListingDetailsComponent implements OnInit {
  @Output() messageClicked: EventEmitter<Item> = new EventEmitter();
  @Output() switch: EventEmitter<string> = new EventEmitter();
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

  onChat(): void {
    this.switch.emit('chat');
    this.chatService.createConversation(this.items[0]);
    this.messageClicked.emit(this.items[0])
  }

  onPrev(): void {
    this.switch.emit('prev');
  }
}
