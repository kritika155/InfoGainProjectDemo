import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ApiService } from './services/api.service';
import { Observable } from 'rxjs';
import { YourinstantinkaccountComponent } from './components/yourinstantinkaccount/yourinstantinkaccount.component';
import { YourlinkComponent } from './components/yourlink/yourlink.component';
import { YourprinterconnectionsComponent } from './components/yourprinterconnections/yourprinterconnections.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
@NgModule({
  declarations: [AppComponent, HomeComponent, YourinstantinkaccountComponent, YourlinkComponent, YourprinterconnectionsComponent, BreadcrumbComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
