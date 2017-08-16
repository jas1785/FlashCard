import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { DeckPage } from '../deck/deck';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab3Root = DeckPage;
  tab2Root = AboutPage;
  
  constructor() {

  }
}
