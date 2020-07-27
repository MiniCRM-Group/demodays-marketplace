import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectorRef } from '@angular/core';
import { Message, Conversation } from '../../../models/conversation';
import { ChatService } from '../../../services/chat.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  @Output() switch: EventEmitter<string> = new EventEmitter();
  @Input() convoName: string = '';
  conversation: Conversation = {
    name: '',
    history: []
  };
  currentTextMessage = '';
  otherUserTyping: string;

  constructor(private readonly chatService: ChatService, private readonly changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.chatService.openedConveration$.subscribe((convo: Conversation) => {
      this.conversation = convo;
      this.changeDetector.detectChanges();
    });
  }

  handleClickBackButton() {
    this.switch.emit('chat-list');
  }

  handleSendMessageButton() {
    this.conversation.history.push({
      name: 'Roddy',
      date: 'Now',
      text: this.currentTextMessage,
      fromCurrentUser: true
    });
    this.currentTextMessage = '';
    this.pretendOtherUserTyping();
  }

  pretendOtherUserTyping() {
    this.otherUserTyping = this.conversation.history[0].name;
    setTimeout(() => {
      const msg: Message = {
        name: this.conversation.history[0].name,
        date: 'Now',
        text: 'I can offer you a 5% discount!',
        fromCurrentUser: false
      };
      this.chatService.pushMessageToConvo(this.conversation.name, msg);
      this.otherUserTyping = undefined;
    }, 3000);
  }
}
