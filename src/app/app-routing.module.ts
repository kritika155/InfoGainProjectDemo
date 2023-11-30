import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
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
  {
    path: '',
    redirectTo: ' ',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
