import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UploadItemService } from '../../../services/upload-item.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  @Output() switch: EventEmitter<string> = new EventEmitter();
  constructor(private uploadItemService: UploadItemService) { }

  ngOnInit(): void {
    this.uploadItemService.uploadItemToServer();
  }

  onSellAnotherItem() {
    this.switch.emit('next');
  }
}
