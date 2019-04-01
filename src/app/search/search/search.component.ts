import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ams-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() searchSubmitted = new EventEmitter<FormGroup>();

  searchForm = this.fb.group({
    searchTerm: ['']
  });

  constructor(private fb: FormBuilder) {}

  submitForm() {
    this.searchSubmitted.emit(this.searchForm);
  }
}
