import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navigation2ChannelsComponent } from './navigation2-channels.component';

describe('Navigation2ChannelsComponent', () => {
  let component: Navigation2ChannelsComponent;
  let fixture: ComponentFixture<Navigation2ChannelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Navigation2ChannelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Navigation2ChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
