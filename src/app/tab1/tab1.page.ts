import { Component, OnInit, ViewChild } from '@angular/core';
import { GithubApiService } from '../services/github-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IonInfiniteScroll, IonVirtualScroll } from '@ionic/angular';
import { map, merge, mergeMap } from 'rxjs/operators';
import { GithubApi } from '../interfaces/github';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  itemSearch: string;
  itemsFetchGithub: GithubApi;
  itemsView;
  countPage: number;


  constructor(
    private githubService: GithubApiService,
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
    console.log(this.itemSearch);
    this.githubService.fetchItemsGithub(this.itemSearch, this.countPage).subscribe(data => {
      this.itemsFetchGithub = data;
      this.itemsView = this.itemsFetchGithub.items;
      // this.countPage = 2;
    });
  }

  filterdItems(ev) {
    if (ev.detail.value) {
      this.countPage = 1;
      this.itemSearch = ev.detail.value;
      this.githubService.fetchItemsGithub(this.itemSearch, this.countPage).subscribe(data => {
        this.itemsFetchGithub = data;
        this.itemsView = this.itemsFetchGithub.items;
      });
    }
  }

  onlink() {
    console.log('OnLink');
  }

  onMark() {
    console.log('OnMark');
  }

  loadItems(ev) {
    setTimeout(() => {
      this.countPage++;
      console.log(this.countPage);
      ev.target.complete();
      this.githubService.fetchItemsGithub(this.itemSearch, this.countPage).subscribe((data) => {
        this.itemsFetchGithub = data;
        this.itemsView = this.itemsView.concat(this.itemsFetchGithub.items);
      });
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      // if (data.length === 1000) {
      //   ev.target.disabled = true;
      // }
    }, 500);
  }

}
