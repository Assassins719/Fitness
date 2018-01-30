import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ExpensesPage } from '../pages/expenses/expenses';
import { HealthPage } from '../pages/health/health';
import { ExplorePage } from '../pages/explore/explore';
import { ShopPage } from '../pages/shop/shop';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';

import { HealthTopDashComponent } from '../components/health-top-dash/health-top-dash';
import { HealthYourselfComponent } from '../components/health-yourself/health-yourself';
import { HealthGoalComponent } from '../components/health-goal/health-goal';
import { PopoverComponent } from '../components/popover/popover';
import { HealthExerciseComponent } from '../components/health-exercise/health-exercise';
import { HealthFeedComponent } from '../components/health-feed/health-feed';
import { HealthRecipesComponent } from '../components/health-recipes/health-recipes';
import { HealthWatchComponent } from '../components/health-watch/health-watch';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ExpensesPage,
    HealthPage,
    ExplorePage,
    ShopPage,
    ProfilePage,
    HealthTopDashComponent,
    HealthYourselfComponent,
    HealthGoalComponent,
    PopoverComponent,
    HealthExerciseComponent,
    HealthFeedComponent,
    HealthRecipesComponent,
    HealthWatchComponent

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ExpensesPage,
    HealthPage,
    ExplorePage,
    ShopPage,
    ProfilePage,
    PopoverComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
