import { Component } from '@angular/core';
import { GithubApiService } from '../services/github-api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private githubService: GithubApiService) {}

  ngOnInit(): void {
    const query = 'Ruby';
    this.githubService.fetchItemsGithub(query).subscribe(data => {
      console.log(data);
    });
  }

  filterdItems(ev) {
    console.log(ev.detail.value);
    if (ev.detail.value) {
      this.githubService.fetchItemsGithub(ev.detail.value).subscribe(data => {
        console.log(data);
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
