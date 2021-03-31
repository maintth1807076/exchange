import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <app-header [headerHome]="true"></app-header>
    <router-outlet></router-outlet>
    <app-menu></app-menu>
  `,
  styles: [
  ]
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
