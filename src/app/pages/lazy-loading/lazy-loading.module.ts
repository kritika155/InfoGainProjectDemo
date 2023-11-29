import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourPrinterConnectionComponent } from '../your-printer-connection/your-printer-connection.component';
import { YourLinkComponent } from '../your-link/your-link.component';
import { YourInstantInkAccountComponent } from '../your-instant-ink-account/your-instant-ink-account.component';

import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';

@NgModule({
  declarations: [
    YourPrinterConnectionComponent,
    YourLinkComponent,
    YourInstantInkAccountComponent,
  ],
  imports: [CommonModule, LazyLoadingRoutingModule],
})
export class LazyLoadingModule {}
