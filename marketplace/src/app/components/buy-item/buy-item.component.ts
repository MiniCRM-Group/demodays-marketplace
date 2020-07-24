import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';

const items : Item[] = [
  { id: 'qwerty',
    name: 'Electric Guitar',
    seller: 'John John',
    description: 'Used like new',
    price: '50 USD',
    imageUrls: ['image1'],
  },

  { id: 'abcd',
    name: 'Electric Boiler',
    seller: 'John John',
    description: 'Used like new',
    price: '50 USD',
    imageUrls: ['image1'],
  },

  { id: 'qwerty',
    name: 'Electric Guitar',
    seller: 'John John',
    description: 'Used like new',
    price: '50 USD',
    imageUrls: ['image1'],
  }

];


@Component({
  selector: 'app-buy-item',
  templateUrl: './buy-item.component.html',
  styleUrls: ['./buy-item.component.css']
})
export class BuyItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

}
