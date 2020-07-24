import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sell-item',
  templateUrl: './sell-item.component.html',
  styleUrls: ['./sell-item.component.css']
})
export class SellItemComponent implements OnInit {
  pages = ['upload', 'details', 'submit'];
  selectedIndex = 0;
  constructor() { }

  ngOnInit(): void {
  }

  handleOnSwitch(value: string) {
    console.log(value);
    if (value === 'prev' && this.selectedIndex > 0) {
      this.selectedIndex--;
    } else if (value === 'next') {
      this.selectedIndex = (this.selectedIndex + 1) % this.pages.length;
    }
  }
}
