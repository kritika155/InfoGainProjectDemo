import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { tabData } from './models/tabData.model';
import { getData, getAppLinkData } from './pages/lazy-loading/helper';
let displayData: tabData[] = [];
let yourlink = '';
let yourinstantinkaccount = '';
let yourprinterconnections = '';
let data = getData();
displayData = getAppLinkData();
yourlink = displayData[0].tab_identifier;
yourinstantinkaccount = displayData[1].tab_identifier;
yourprinterconnections = displayData[2].tab_identifier;
console.log('yourlink', yourlink);
console.log('yourinstantinkaccount', yourinstantinkaccount);
console.log('yourprinterconnections', yourprinterconnections);

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: yourprinterconnections,
    loadChildren: () =>
      import(
        './pages/your-printer-connection/your-printer-connection.module'
      ).then((m) => m.YourPrinterConnectionModule),
    data: {
      breadcrumb: 'Support Categories',
    },
  },
  {
    path: yourlink,
    loadChildren: () =>
      import('./pages/your-link/your-link.module').then(
        (m) => m.YourLinkModule
      ),
    data: {
      breadcrumb: 'Support Categories',
    },
  },
  {
    path: yourinstantinkaccount,
    loadChildren: () =>
      import(
        './pages/your-instant-ink-account/your-instant-ink-account.module'
      ).then((m) => m.YourInstantInkAccountModule),
    data: {
      breadcrumb: 'Support Categories',
    },
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
