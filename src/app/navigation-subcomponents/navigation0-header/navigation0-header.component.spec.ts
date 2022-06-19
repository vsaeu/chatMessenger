import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navigation0HeaderComponent } from './navigation0-header.component';

describe('Navigation0HeaderComponent', () => {
  let component: Navigation0HeaderComponent;
  let fixture: ComponentFixture<Navigation0HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Navigation0HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Navigation0HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
