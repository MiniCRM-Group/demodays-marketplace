import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item, ItemResponse } from 'src/app/models/item';
import { RetrieveItemService } from 'src/app/services/retrieve-item.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
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

  onClick(): void {
    this.switch.emit('next');
  }
}
