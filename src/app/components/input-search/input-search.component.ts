import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BehaviorSubject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss'],
})
export class InputSearchComponent implements OnInit {
  searchTerm: string = '';
  private _searchTerm$: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );

  @Output() emitSearchTerm: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    this._searchTerm$.pipe(debounceTime(500)).subscribe((term) => {
      this.emitSearchTerm.emit(term);
    });
  }

  changeSearchTerm(event: string): void {
    this._searchTerm$.next(event);
  }
}
