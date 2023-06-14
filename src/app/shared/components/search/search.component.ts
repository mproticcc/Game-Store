import { Component, ElementRef, ViewChild } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @ViewChild('search') search!: ElementRef;

  constructor(private searchService: SearchService) {}

  onSearch(searchValue: string): void {
    this.searchService.searchedValue$.next(searchValue);
  }

  onClear(): void {
    this.search.nativeElement.value = '';
    this.searchService.searchedValue$.next('');
  }
}
