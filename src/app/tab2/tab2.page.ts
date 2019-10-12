import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { InterfaceFavorite } from '../interfaces/iapi';
import { InitialFavoriteData } from '../data/initialData';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  itemsFavorite = InitialFavoriteData as Array<InterfaceFavorite>;

  constructor(private apiService: ApiService) {
    console.log('test');
  }

  ngOnInit() {
    this.fetchFavoriteItems();
  }

  onDelete(id: string) {
    this.apiService.deleteFavoriteItem(id).subscribe(() => {
      for (let i = 0; i < this.itemsFavorite.length; i++) {
        if (this.itemsFavorite[i].id === id) {
          this.itemsFavorite.splice(i, 1);
        }
      }
    });
  }
  ionViewWillEnter() {
    this.fetchFavoriteItems();
  }

  fetchFavoriteItems() {
    this.apiService.fetchFavoriteItems().subscribe((items) => {
      this.itemsFavorite = items;
    });
  }
}
