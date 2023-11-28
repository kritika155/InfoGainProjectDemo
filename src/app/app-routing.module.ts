import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import mockdata from './Mock Data/mockdata.json';
import { YourinstantinkaccountComponent } from './components/yourinstantinkaccount/yourinstantinkaccount.component';
import { YourlinkComponent } from './components/yourlink/yourlink.component';
import { YourprinterconnectionsComponent } from './components/yourprinterconnections/yourprinterconnections.component';

import { ApiService } from './services/api.service';
interface tabData {
  headerText: string;
  order: string;
  tab_identifier: string;
}
let displayData: tabData[] = [];
let yourlink = '';
let yourinstantinkaccount = '';
let yourprinterconnections = '';
let data = mockdata.data;
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
console.log('inkObject', yourlink);
console.log('linkObject', yourinstantinkaccount);
console.log('printerObject', yourprinterconnections);
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: yourlink,
    component: YourlinkComponent,
    data: {
      breadcrumb: 'Support Categories',
    },
  },
  {
    path: yourinstantinkaccount,
    component: YourinstantinkaccountComponent,
    data: {
      breadcrumb: 'yourlink',
    },
  },
  {
    path: yourprinterconnections,
    component: YourprinterconnectionsComponent,
    data: {
      breadcrumb: 'yourinstantinkaccount',
    },
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  // { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
