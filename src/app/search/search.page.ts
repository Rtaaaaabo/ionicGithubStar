import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  itemSearch: string;

  constructor() {
    this.itemSearch = '';
  }

  ngOnInit() {
    console.log('search Page');
  }

  processForm() {
    console.log(this.itemSearch);
  }

}
