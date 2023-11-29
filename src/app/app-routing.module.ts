import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import mockdata from './Mock Data/mockdata.json';
import { tabData } from './models/tabData.model';
import { ApiService } from './services/api.service';

let displayData: tabData[] = [];
let yourlink = '';
let yourinstantinkaccount = '';
let yourprinterconnections = '';
let data = mockdata.data;
getAppLinkData();
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/lazy-loading/lazy-loading.module').then(
        (m) => m.LazyLoadingModule
      ),
    data: {
      breadcrumb: 'Support Categories',
    },
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
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
