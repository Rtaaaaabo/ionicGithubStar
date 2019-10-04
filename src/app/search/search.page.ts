import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('search Page');
  }

  onClick(){
    console.log('onClick');
  }

  processForm(event) {
    console.log(event);
  }

  handleInputKeyword(event) {
    console.log(event);
  }

}
