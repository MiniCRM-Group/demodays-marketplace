import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  item: Item = {id: '',
    name: '',
    seller: '',
    description: '',
    price: '$',
    imageUrls: []};

  constructor() { }

  ngOnInit(): void {
  }

}
