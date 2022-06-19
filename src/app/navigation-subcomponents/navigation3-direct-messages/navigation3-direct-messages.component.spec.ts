import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navigation3DirectMessagesComponent } from './navigation3-direct-messages.component';

describe('Navigation3DirectMessagesComponent', () => {
  let component: Navigation3DirectMessagesComponent;
  let fixture: ComponentFixture<Navigation3DirectMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Navigation3DirectMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Navigation3DirectMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
