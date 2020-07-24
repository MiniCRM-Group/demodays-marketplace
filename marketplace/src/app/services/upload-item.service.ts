import { HttpClient } from '@angular/common/http';
import { PartialItem, UploadedItem } from '../models/item';
import { Injectable } from '@angular/core';

/**
 * Handles item creation and local storage
 * as user progress through sell process.
 */
@Injectable({
    providedIn: 'root'
})
export class UploadItemService {
    private _endpoint = '/';

    private  _currentItem: PartialItem = {
      name: '',
      seller: '',
      description: '',
      price: '',
    };

    private _uploadedImages: string[] = [];

    constructor(private http: HttpClient) {}

    get uploadedImages(): string[] {
      return this._uploadedImages;
    }

    get currentItem(): PartialItem {
      return this._currentItem;
    }

    set currentItem(value: PartialItem) {
      this._currentItem = value;
    }

    onImageUploaded(event: any, callback: () => void ) {
      if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.addEventListener('loadend', () => {
          if (typeof reader.result === 'string') {
            this._uploadedImages.push(reader.result.toString());
            callback();
          }
        });
        reader.readAsDataURL(file);
      }
    }

    removeImage(index: number) {
      const newUploadedImages: string[] = [];
      for (let i = 0; i < this._uploadedImages.length; i++) {
        if (i !== index) {
          newUploadedImages.push(this._uploadedImages[i]);
        }
      }
      this._uploadedImages = newUploadedImages;
    }

    uploadItemToServer() {
      const itemToUpload: UploadedItem = {
        ...this._currentItem,
        uploadedImages: this._uploadedImages
      };
      this.http.post<any>(this._endpoint, itemToUpload);
      console.log(itemToUpload);
    }
}