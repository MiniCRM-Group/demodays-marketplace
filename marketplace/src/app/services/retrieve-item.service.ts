import { HttpClient } from "@angular/common/http";
import { ItemResponse, Item } from "../models/item";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RetrieveItemService {
    endpoint = '/api/retrieve-items'
    constructor(private http: HttpClient) {}
    getItems(): Observable<ItemResponse> {
        return of({
           items :[
                { id: 'qwerty',
                  name: 'Like New Logitech G332 Headset',
                  seller: 'John Bo',
                  description: 'Like New Logitech Red G332 Gamging Headset.Includes clear microphone. Connects with either 3.5mm jack or USB',
                  price: '$45',
                  totalViews: 0,
                  imageUrls: ['logitech.jpg'],
                },
              
                { id: 'abcd',
                  name: 'Log',
                  seller: 'John John',
                  description: 'Used like new',
                  price: '50 USD',
                  totalViews: 0,
                  imageUrls: ['image1'],
                },
              
                { id: 'qwerty',
                  name: 'Electric Guitar',
                  seller: 'John John',
                  description: 'Used like new',
                  price: '50 USD',
                  totalViews: 0,
                  imageUrls: ['image1'],
                }
              
              ]
        });
    }
}
