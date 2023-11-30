import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YourPrinterConnectionComponent } from '../your-printer-connection/your-printer-connection.component';
import { YourPrinterConnectionRoutingModule } from './your-printer-connection-routing.module';

@NgModule({
  declarations: [YourPrinterConnectionComponent],
  imports: [CommonModule, YourPrinterConnectionRoutingModule],
})
export class YourPrinterConnectionModule {}
