import { Component, OnInit, OnDestroy } from '@angular/core';
import { PartialItem } from 'src/app/models/item';
import { UploadItemService } from 'src/app/services/upload-item.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {
  item: PartialItem = {
    name: '',
    seller: '',
    description: '',
    price: '$',
  };

  constructor(private uploadItemService: UploadItemService) { }

  ngOnInit(): void {
    this.item = this.uploadItemService.currentItem;
  }

  ngOnDestroy(): void {
    this.uploadItemService.currentItem = this.item;
  }
}
