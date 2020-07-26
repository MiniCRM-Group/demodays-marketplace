import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, AfterViewChecked } from '@angular/core';
import { BuyItemComponent } from '../buy-item/buy-item.component';
import { SellItemComponent } from '../sell-item/sell-item.component';
import { ChatComponent } from '../chat/chat.component';
import { Item } from '../../models/item';
import { ChatService } from '../../services/chat.service';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-user-actions',
  templateUrl: './user-actions.component.html',
  styleUrls: ['./user-actions.component.css']
})
export class UserActionsComponent implements OnInit, AfterViewInit {
  @ViewChild('buyItemPage') buyItem: BuyItemComponent;
  @ViewChild('sellItemPage') sellItem: SellItemComponent;
  @ViewChildren('chatPage') chat: ChatComponent;
  selectedTab = 1;
  chatCurrentPage = 'chat-list';
  chatLoaded: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private readonly chatService: ChatService) { 
    
  }

  ngOnInit(): void {
  }

  onMessageClicked(item: Item) {
    this.selectedTab = 2;
    this.chatService.clickOnConversation(item.name);
    this.chatLoaded.asObservable().subscribe((isReady: boolean) => {
      if(isReady) {
        this.chatCurrentPage = 'conversation';
      }
    });
  }

  ngAfterViewInit() {
    this.chatLoaded.next(true);
  }
}
