import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { Observable } from 'rxjs';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { LazyLoadingModule } from './pages/lazy-loading/lazy-loading.module';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { YourInstantInkAccountModule } from './pages/your-instant-ink-account/your-instant-ink-account.module';
import { YourLinkModule } from './pages/your-link/your-link.module';
import { YourPrinterConnectionModule } from './pages/your-printer-connection/your-printer-connection.module';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    YourInstantInkAccountModule,
    YourLinkModule,
    YourPrinterConnectionModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
