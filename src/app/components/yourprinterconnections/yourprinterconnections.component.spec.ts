import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourprinterconnectionsComponent } from './yourprinterconnections.component';

describe('YourprinterconnectionsComponent', () => {
  let component: YourprinterconnectionsComponent;
  let fixture: ComponentFixture<YourprinterconnectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourprinterconnectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourprinterconnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
