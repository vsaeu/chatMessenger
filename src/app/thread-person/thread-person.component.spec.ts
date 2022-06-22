import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadPersonComponent } from './thread-person.component';

describe('ThreadPersonComponent', () => {
  let component: ThreadPersonComponent;
  let fixture: ComponentFixture<ThreadPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreadPersonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreadPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
