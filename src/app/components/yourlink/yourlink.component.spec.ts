import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourlinkComponent } from './yourlink.component';

describe('YourlinkComponent', () => {
  let component: YourlinkComponent;
  let fixture: ComponentFixture<YourlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourlinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
