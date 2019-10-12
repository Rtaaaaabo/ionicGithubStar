import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { IGithubApi } from '../interfaces/github';
import { InterfaceApi } from '../interfaces/iapi';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  itemsFavorite: InterfaceApi;

  constructor(private apiService: ApiService) {
  }

  onDelete() {
    console.log('onDelete');
  }

}
