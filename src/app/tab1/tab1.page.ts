import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { GithubApiService } from '../services/github-api.service';
import { ApiService } from '../services/api.service';
import { IGithubApi } from '../interfaces/github';
import { InterfaceApi } from '../interfaces/iapi';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  itemsFetchGithub: IGithubApi;
  itemsView;
  itemSearch: string;
  countPage: number;


  constructor(
    private githubService: GithubApiService,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.countPage = 1;
    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.itemSearch = this.router.getCurrentNavigation().extras.state.strItem;
      }
    });
  }

  ngOnInit(): void {
    this.itemSearch = 'Ruby';
    this.githubService.fetchItemsGithub(this.itemSearch, this.countPage).subscribe(data => {
      this.itemsFetchGithub = data;
      this.itemsView = this.itemsFetchGithub.items;
      console.log(this.itemsView);
    });
  }

  filterdItems(ev): void {
    if (ev.detail.value) {
      this.countPage = 1;
      this.itemSearch = ev.detail.value;
      this.githubService.fetchItemsGithub(this.itemSearch, this.countPage).subscribe(data => {
        this.itemsFetchGithub = data;
        this.itemsView = this.itemsFetchGithub.items;
      });
    }
  }

  onMark(item): void {
    const postData: InterfaceApi = {
      repositoryName: item.name,
      url: item.html_url,
      description: item.description,
      language: item.language,
      ownerAvatorUrl: item.owner.avatar_url,
      ownerLoginName: item.owner.login
    };
    console.log(postData);
    this.apiService.postFavoriteItem(postData).subscribe(
      (data) => console.log(data),
      (error) => console.log('error: ', error)
    );
  }

  loadItems(ev): void {
    setTimeout(() => {
      this.countPage++;
      ev.target.complete();
      this.githubService.fetchItemsGithub(this.itemSearch, this.countPage).subscribe((data) => {
        this.itemsFetchGithub = data;
        this.itemsView = this.itemsView.concat(this.itemsFetchGithub.items);
      });
      if (this.itemsFetchGithub.total_count === this.itemsView.length) {
        ev.target.disabled = true;
      }
    }, 1000);
  }
}
