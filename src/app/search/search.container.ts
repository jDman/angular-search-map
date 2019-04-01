import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ams-search-container',
  template: `
    <div class="search-container">
      <ams-search (searchSubmitted)="search($event)"></ams-search>
    </div>
  `
})
export class SearchContainerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  search(input) {}
}
