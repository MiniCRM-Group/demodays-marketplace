import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { PartialItem } from 'src/app/models/item';
import { UploadItemService } from 'src/app/services/upload-item.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {
  @Output() switch: EventEmitter<string> = new EventEmitter();
  item: PartialItem = {
    name: '',
    seller: '',
    description: '',
    price: '$',
  };
  images: string[] = [];
  selectedIndex: number;

  constructor(private uploadItemService: UploadItemService) { }

  ngOnInit(): void {
    this.item = this.uploadItemService.currentItem;
    this.images = this.uploadItemService.uploadedImages;
    if (this.images.length > 0) {
      this.selectedIndex = 0;
    }

  }

  ngOnDestroy(): void {
    this.uploadItemService.currentItem = this.item;
  }

  onNext() {
    this.switch.emit('next');
  }

  onPrev() {
    this.switch.emit('prev');
  }
}
