import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private iab: InAppBrowser) {
  }

  goToMenu() {
    const browser = this.iab.create('https://www.menugrg.com.mx:7443/toks', '_blank', 'fullscreen=no,location=no');
  }
}
