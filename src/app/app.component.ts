import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'exchange';
  async ngAfterViewInit(): Promise<void> {
    await this.loadScript('/assets/js/vendor/jquery.min.js');
    await this.loadScript('/assets/js/vendor/jquery.validate.min.js');
    await this.loadScript('/assets/js/vendor/jquery.circlechart.js');
    await this.loadScript('/assets/js/common.js');
  }

  loadScript(scriptUrl: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
  }
  // "src/assets/js/vendor/jquery.min.js",
  // "src/assets/js/vendor/jquery.validate.min.js",
  // "src/assets/js/vendor/jquery.circlechart.js",
  // "src/assets/js/common.js"
}
