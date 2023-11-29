import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import mockdata from './Mock Data/mockdata.json';
import { tabData } from './models/tabData.model';
import { ApiService } from './services/api.service';

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
