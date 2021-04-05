import {AfterViewInit, Component} from '@angular/core';

declare global {
  interface Window {
    tronWeb: any;
    $: any;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'exchange';
  isAddress = '';
  constructor() {
    let getIsAddress = setInterval(async () => {
      if (window.tronWeb !== undefined) {
        if (window.tronWeb.defaultAddress.hex && window.tronWeb.defaultAddress.base58.length > 10) {
          clearInterval(getIsAddress);
          this.isAddress = window.tronWeb.defaultAddress.base58;
        }
      }
    }, 50);
  }

  async ngAfterViewInit(): Promise<void> {
    // await this.loadScript('/assets/js/vendor/jquery.min.js');
    await this.loadScript('/assets/js/jquery-3.5.1.min.js');
    await this.loadScript('/assets/js/vendor/jquery.validate.min.js');
    await this.loadScript('/assets/js/vendor/jquery.circlechart.js');
    await this.loadScript('/assets/js/common.js');
    await this.loadScript('/assets/js/popper.min.js');
    await this.loadScript('/assets/js/bootstrap.js');
    await this.loadScript('/assets/js/swiper-bundle.min.js');
    await this.loadScript('/assets/js/Chart.bundle.min.js');
    await this.loadScript('/assets/js/main.js');
  }

  loadScript(scriptUrl: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
  }
}
