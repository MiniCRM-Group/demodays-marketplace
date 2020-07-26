import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Conversation } from '../../models/conversation';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  currentPage = 'chat-list';
  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
  }

  handleNavigation(page: string) {
    this.currentPage = page;
  }
}
