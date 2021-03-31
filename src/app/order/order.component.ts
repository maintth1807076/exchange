import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: []
})
export class OrderComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

  isActiveTab(tab: string): boolean {
    return tab === window.location.pathname;
  }

}
