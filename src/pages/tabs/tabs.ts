import { Component } from '@angular/core';

import { ExpensesPage } from '../expenses/expenses';
import { HealthPage } from '../health/health';
import { ExplorePage } from '../explore/explore';
import { ShopPage } from '../shop/shop';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html',
  selector: 'page-tabs',
})
export class TabsPage {
  tab1Root = ExplorePage;
  tab2Root = HealthPage;
  tab3Root = ExpensesPage;
  tab4Root = ShopPage;
  tab5Root = ProfilePage;
  constructor() {

  }
}
