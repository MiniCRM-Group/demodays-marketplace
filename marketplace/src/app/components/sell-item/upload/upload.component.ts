import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  public nextDisabled: boolean = true;

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
  }

  /**
   * Called when an image is uploaded. Enables the next button with a valid image.
   * @param imageInput the image input
   */
  processImage(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader;
    reader.addEventListener('load', (event: any) => {

      //Don't call since no backend
      //this.imageService.uploadImage(file).subscribe();
    });
    
    reader.readAsDataURL(file);
    this.nextDisabled = false;
  }

}
