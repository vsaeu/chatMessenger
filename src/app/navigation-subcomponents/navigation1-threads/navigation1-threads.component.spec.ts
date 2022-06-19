import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navigation1ThreadsComponent } from './navigation1-threads.component';

describe('Navigation1ThreadsComponent', () => {
  let component: Navigation1ThreadsComponent;
  let fixture: ComponentFixture<Navigation1ThreadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Navigation1ThreadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Navigation1ThreadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
