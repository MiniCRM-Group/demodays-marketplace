import { Component, OnInit } from '@angular/core';
import { UploadItemService } from '../../../services/upload-item.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  nextDisabled = true;
  images: string[] = [];
  selectedIndex: number;

  constructor(private uploadItemService: UploadItemService) { }

  ngOnInit(): void {
    this.images = this.uploadItemService.uploadedImages;
    if (this.images.length > 0) {
      this.selectedIndex = 0;
      this.nextDisabled = false;
    }
  }

  /**
   * Called when an image is uploaded. Enables the next button with a valid image.
   * @param imageInput the image input
   */
  handleUpload(imageInput: any) {
    this.uploadItemService.onImageUploaded(imageInput, () => {
      this.selectedIndex = this.images.length - 1;
    });
    this.images = this.uploadItemService.uploadedImages;
    this.nextDisabled = false;
  }

  handleDelete(index: number) {
    this.uploadItemService.removeImage(index);
    this.images = this.uploadItemService.uploadedImages;
    this.selectedIndex = this.images.length - 1;
  }

  handleSelect(index: number) {
    this.selectedIndex = index;
  }
}
