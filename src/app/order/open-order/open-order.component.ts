import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-open-order',
  templateUrl: './open-order.component.html',
  styles: [
  ]
})
export class OpenOrderComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  async ngAfterViewInit(): Promise<void> {
    await this.loadScript('/assets/js/select-custom.js');
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
