import { HttpClient } from "@angular/common/http";
import { ItemResponse, Item } from "../models/item";
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RetrieveItemService {
    endpoint = '/api/retrieve-items'
    constructor(private http: HttpClient) {}
    getItems(): Observable<ItemResponse> {
        return of({
           items: 
            [
                { 
                  id: 'qwerty',
                  name: 'Like New Logitech G332 Headset',
                  seller: 'John Bo',
                  description: 'Like New Logitech Red G332 Gaming Headset. \nIncludes clear microphone.\nConnects with either 3.5mm jack or USB',
                  price: '$45',
                  totalViews: 0,
                  imageUrls: ['logitech.jpg'],
                },
                { 
                  id: 'abcd',
                  name: 'Logitech Wireless Mouse',
                  seller: 'Micey Stevens',
                  description: 'Used',
                  price: '$8',
                  totalViews: 0,
                  imageUrls: ['mouseMx518.jpg'],
                },
                { 
                  id: 'qwerty',
                  name: 'Nike Flex Women Shoes' ,
                  seller: 'Karen Johnson',
                  description: 'Used',
                  price: '$15',
                  totalViews: 0,
                  imageUrls: ['usedNikeShoes.jpg'],
                }  
            ]
        });
    }
}
