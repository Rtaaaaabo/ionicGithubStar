import { Component } from '@angular/core';
import { GithubApiService } from '../services/github-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, merge, mergeMap } from 'rxjs/operators';
import { GithubApi } from '../interfaces/github';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  itemSearch: string;
  itemsGithub;

  constructor(
    private githubService: GithubApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.itemsGithub = {
      incomplete_results: false,
      total_count: 0,
      items: []
    };
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.itemSearch = this.router.getCurrentNavigation().extras.state.strItem;
      }
    });
    console.log(this.itemSearch);
  }

  ngOnInit(): void {
    console.log('tab1');
    const query = '';
    this.githubService.fetchItemsGithub(this.itemSearch).subscribe(data => {
      this.itemsGithub = data;
    });
  }

  filterdItems(ev) {
    console.log(ev.detail.value);
    if (ev.detail.value) {
      this.githubService.fetchItemsGithub(ev.detail.value).subscribe(data => {
        this.itemsGithub = data;
        console.log(this.itemsGithub);
      });
    }
  }

  onlink() {
    console.log('OnLink');
  }

  onMark() {
    console.log('OnMark');
  }

}
