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
    private _endpoint = '/api/upload-item';
    // To view current item that user wants to sell
    private  _currentItem: PartialItem = {
      name: '',
      seller: 'Roddy',
      description: '',
      price: '',
    };
    // To view images that this user uploaded.
    private _uploadedImages: string[] = [];
    // To view history of items that this user submitted.
    private _submittedItems: UploadedItem[] = [];

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

    get submittedItems(): UploadedItem[] {
      return this._submittedItems;
    }

    // called when user uploads image
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

    // called when user removes images
    removeImage(index: number) {
      const newUploadedImages: string[] = [];
      for (let i = 0; i < this._uploadedImages.length; i++) {
        if (i !== index) {
          newUploadedImages.push(this._uploadedImages[i]);
        }
      }
      this._uploadedImages = newUploadedImages;
    }

    // called when user submits item
    uploadItemToServer() {
      const itemToUpload: UploadedItem = {
        ...this._currentItem,
        uploadedImages: this._uploadedImages
      };
      // adds to local history of items submitted
      this._submittedItems.push(itemToUpload);
      // submits item to server
      this.http.post<any>(this._endpoint, itemToUpload);
      // reset current item and image urls
      this.resetCurrentItem();
    }

    // called when user wants to create a new item or submitted
    resetCurrentItem() {
      this._currentItem = {
        name: '',
        price: '',
        description: '',
        seller: 'Roddy'
      };
      this._uploadedImages = [];
    }
}