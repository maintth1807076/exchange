import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="site-footer">
      <div class="container">
        <nav class="navbar">
          <div class="footer-navbar-sticky">
            <ul class="navbar-nav navbar">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" routerLink="/home">
                  <i class="fas fa-home"></i>
                  <label for="home">Trang chủ</label>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/history">
                  <i class="fas fa-history"></i>
                  <label for="history">Lịch sử</label>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/wallet">
                  <i class="fas fa-wallet"></i>
                  <label for="history">Ví</label>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
