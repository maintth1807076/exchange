import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="header">
      <div class="container">
        <a routerLink="/home" title="Tên webiste" class="header__logo"><img src="assets/images/logo.png" alt="Logo" width="318" height="64"></a>
        <a *ngIf="headerHome" href="#" data-control="menu" class="header__menu"><span class="material-icons">menu</span></a>
      </div>
    </header>
    <!--/.header-->
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  @Input() headerHome: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
