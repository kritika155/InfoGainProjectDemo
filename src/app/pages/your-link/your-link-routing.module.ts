import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YourLinkComponent } from '../your-link/your-link.component';
import { tabData } from '../../models/tabData.model';
import { getData, getAppLinkData } from '../lazy-loading/helper';
let displayData: tabData[] = [];
let yourlink = '';
let data = getData();
displayData = getAppLinkData();
yourlink = displayData[0].tab_identifier;
console.log('yourlink', yourlink);

const routes: Routes = [
  {
    path: '',
    component: YourLinkComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourLinkRoutingModule {}
