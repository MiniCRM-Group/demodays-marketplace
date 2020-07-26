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
                  seller: 'Alex',
                  description: 'Like New Logitech Red G332 Gamging Headset.Includes clear microphone. Connects with either 3.5mm jack or USB',
                  price: '$45',
                  totalViews: 0,
                  imageUrls: ['logitech.jpg'],
                },
                {
                  id: 'qwerty',
                  name: 'Used AKG K550 Headphones',
                  seller: 'Aman',
                  description: 'Used like new',
                  price: '$75',
                  totalViews: 0,
                  imageUrls: ['HeadphonesAKGK550.jpg'],
                },
                {
                  id: 'qwerty',
                  name: 'Used Nike Flex Experience',
                  seller: 'Roddy',
                  description: 'Women\'s size 9.5, very little use',
                  price: '$15',
                  totalViews: 0,
                  imageUrls: ['usedNikeShoes.jpg'],
                },
                {
                  id: 'qwerty',
                  name: 'Used Logitech Wireless Mouse MX518',
                  seller: 'Alex',
                  description: '',
                  price: '$8',
                  totalViews: 0,
                  imageUrls: ['mouseMx518.jpg'],
                }
            ]
        });
    }
}
