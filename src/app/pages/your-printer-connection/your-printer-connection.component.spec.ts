import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourPrinterConnectionComponent } from './your-printer-connection.component';

describe('YourPrinterConnectionComponent', () => {
  let component: YourPrinterConnectionComponent;
  let fixture: ComponentFixture<YourPrinterConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourPrinterConnectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourPrinterConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
