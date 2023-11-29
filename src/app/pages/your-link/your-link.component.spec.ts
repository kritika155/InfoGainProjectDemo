import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourLinkComponent } from './your-link.component';

describe('YourLinkComponent', () => {
  let component: YourLinkComponent;
  let fixture: ComponentFixture<YourLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
