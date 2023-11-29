import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourInstantInkAccountComponent } from './your-instant-ink-account.component';

describe('YourInstantInkAccountComponent', () => {
  let component: YourInstantInkAccountComponent;
  let fixture: ComponentFixture<YourInstantInkAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourInstantInkAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourInstantInkAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
