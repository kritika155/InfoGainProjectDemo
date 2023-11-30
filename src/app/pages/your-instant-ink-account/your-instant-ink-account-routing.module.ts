import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YourInstantInkAccountComponent } from '../your-instant-ink-account/your-instant-ink-account.component';
import { tabData } from '../../models/tabData.model';
import { getData, getAppLinkData } from '../lazy-loading/helper';

let displayData: tabData[] = [];
let yourinstantinkaccount = '';
let data = getData();
displayData = getAppLinkData();
yourinstantinkaccount = displayData[1].tab_identifier;
console.log('yourinstantinkaccount', yourinstantinkaccount);
const routes: Routes = [
  {
    path: '',
    component: YourInstantInkAccountComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourInstantInkAccountRoutingModule {}
