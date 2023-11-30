import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YourLinkComponent } from '../your-link/your-link.component';
import { YourLinkRoutingModule } from './your-link-routing.module';

@NgModule({
  declarations: [YourLinkComponent],
  imports: [CommonModule, YourLinkRoutingModule],
})
export class YourLinkModule {}
