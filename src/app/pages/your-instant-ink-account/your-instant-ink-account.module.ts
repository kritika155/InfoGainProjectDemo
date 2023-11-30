import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourInstantInkAccountComponent } from '../your-instant-ink-account/your-instant-ink-account.component';
import { YourInstantInkAccountRoutingModule } from './your-instant-ink-account-routing.module';

@NgModule({
  declarations: [YourInstantInkAccountComponent],
  imports: [CommonModule, YourInstantInkAccountRoutingModule],
})
export class YourInstantInkAccountModule {}
