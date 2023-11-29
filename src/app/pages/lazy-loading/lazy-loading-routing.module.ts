import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YourPrinterConnectionComponent } from '../your-printer-connection/your-printer-connection.component';
import { YourLinkComponent } from '../your-link/your-link.component';
import { YourInstantInkAccountComponent } from '../your-instant-ink-account/your-instant-ink-account.component';
import mockdata from '../../Mock Data/mockdata.json';
import { tabData } from '../../models/tabData.model';
let displayData: tabData[] = [];
let yourlink = '';
let yourinstantinkaccount = '';
let yourprinterconnections = '';
let data = mockdata.data;
getAppLinkData();
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
function getAppLinkData() {
  data.forEach((e: any) => {
    const { headerText, order, tab_identifier } = e;
    let a = {
      headerText: headerText,
      order: order,
      tab_identifier: tab_identifier,
    };
    displayData.push(a);
    console.log(displayData);
  });
  displayData.sort((a: any, b: any) => a.order - b.order);
  console.log('Sorted display data', displayData);
  yourlink = displayData[0].tab_identifier;
  yourinstantinkaccount = displayData[1].tab_identifier;
  yourprinterconnections = displayData[2].tab_identifier;
  console.log('yourlink', yourlink);
  console.log('yourinstantinkaccount', yourinstantinkaccount);
  console.log('yourprinterconnections', yourprinterconnections);
}
