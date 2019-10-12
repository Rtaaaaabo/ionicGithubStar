import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { IGithubApi } from '../interfaces/github';
import { InterfaceApi } from '../interfaces/iapi';
import { InitialFavoriteData } from '../data/initialData';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  itemsFavorite = InitialFavoriteData as Array<InterfaceApi>;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.fetchFavoriteItems().subscribe((items) => {
      this.itemsFavorite = items;
    });
  }

  onDelete(id: string) {
    this.apiService.deleteFavoriteItem(id).subscribe(data => {
      console.log(data);
    });
  }
}
