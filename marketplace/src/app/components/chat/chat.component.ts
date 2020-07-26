import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @Input() currentPage: string;
  constructor() { }

  ngOnInit(): void {
  }

  handleNavigation(page: string) {
    this.currentPage = page;
  }
}
