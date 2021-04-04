import { Component, OnInit } from '@angular/core';
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-menu',
  template: `
    <a href="#" data-control="menu" class="menu__cover"></a>
    <aside id="menu" class="menu">
      <div class="menu__inner">
        <div class="menu__heading"> <span>Xin chào, <span>nguyenphutrong@gmail.com</span></span><a href="#menu" data-control="menu" class="menu__close"> <span class="material-icons">close</span></a></div>
        <ul class="menu__main">
          <li class="menu__item menu__item--selected"><a routerLink="/home" title="Trang chủ"> <span class="material-icons">home</span><span>Trang chủ</span></a></li>
          <li class="menu__item undefined"><a href="/trade" title="Giao dịch"> <span class="material-icons">paid</span><span>Giao dịch</span></a></li>
          <li class="menu__item undefined"><a (click)="logout()" title="Thoát"> <span class="material-icons">logout</span><span>Thoát</span></a></li>
        </ul>
      </div>
    </aside>
    <!--.menu-->
  `,
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout();
  }
}
