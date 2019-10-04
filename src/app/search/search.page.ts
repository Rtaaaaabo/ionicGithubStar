import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  itemSearch: string;

  constructor(private router: Router) {
    this.itemSearch = '';
  }

  ngOnInit() {
    console.log('search Page');
  }

  processForm() {
    console.log(this.itemSearch);
    const navigationExtras: NavigationExtras = {
      state: {
        strItem: this.itemSearch
      }
    };
    this.router.navigate(['tabs/tab1'], navigationExtras);
  }

}
