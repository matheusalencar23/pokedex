import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-load-more-button',
  templateUrl: './load-more-button.component.html',
  styleUrls: ['./load-more-button.component.scss'],
})
export class LoadMoreButtonComponent implements OnInit {
  @Output() loadMore = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
