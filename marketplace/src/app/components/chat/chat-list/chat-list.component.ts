import { Component, OnInit, EventEmitter, Output, Input, ChangeDetectorRef } from '@angular/core';
import { ChatService } from '../../../services/chat.service';
import { Conversation } from '../../../models/conversation';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {
  @Output() switch: EventEmitter<string> = new EventEmitter();
  chats: Conversation[] = [];
  constructor(private readonly chatService: ChatService, private readonly changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.chatService.conversations$.subscribe((convos: Conversation[]) => {
      this.chats = convos;
      this.changeDetector.detectChanges();
    });
  }

  public handleClickConversation(convo: Conversation) {
    this.switch.emit('conversation');
    this.chatService.clickOnConversation(convo.name);
  }
}
