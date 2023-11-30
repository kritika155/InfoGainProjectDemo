import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YourPrinterConnectionComponent } from '../your-printer-connection/your-printer-connection.component';
import { tabData } from '../../models/tabData.model';
import { getData, getAppLinkData } from '../lazy-loading/helper';

let displayData: tabData[] = [];
let yourprinterconnections = '';
let data = getData();
displayData = getAppLinkData();
yourprinterconnections = displayData[2].tab_identifier;
console.log('yourprinterconnections', yourprinterconnections);

const routes: Routes = [
  {
    path: '',
    component: YourPrinterConnectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourPrinterConnectionRoutingModule {}
