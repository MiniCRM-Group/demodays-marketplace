import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  public nextDisabled: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Calls when an image is uploaded.
   * @param imageInput the image input
   */
  processImage(imageInput: any) {
    this.nextDisabled = false;
  }

}
