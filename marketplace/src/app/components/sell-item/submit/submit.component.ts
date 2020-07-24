import { Component, OnInit } from '@angular/core';
import { UploadItemService } from '../../../services/upload-item.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  constructor(private uploadItemService: UploadItemService) { }

  ngOnInit(): void {
    this.uploadItemService.uploadItemToServer();
  }

}
