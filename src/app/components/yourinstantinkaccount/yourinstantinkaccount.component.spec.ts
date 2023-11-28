import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourinstantinkaccountComponent } from './yourinstantinkaccount.component';

describe('YourinstantinkaccountComponent', () => {
  let component: YourinstantinkaccountComponent;
  let fixture: ComponentFixture<YourinstantinkaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourinstantinkaccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourinstantinkaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
