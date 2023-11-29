import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YourPrinterConnectionComponent } from '../your-printer-connection/your-printer-connection.component';
import { YourLinkComponent } from '../your-link/your-link.component';
import { YourInstantInkAccountComponent } from '../your-instant-ink-account/your-instant-ink-account.component';
import { tabData } from '../../models/tabData.model';
import { getData, getAppLinkData } from './helper';
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
    path: yourlink,
    component: YourLinkComponent,
  },
  {
    path: yourinstantinkaccount,
    component: YourInstantInkAccountComponent,
  },
  {
    path: yourprinterconnections,
    component: YourPrinterConnectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyLoadingRoutingModule {}
