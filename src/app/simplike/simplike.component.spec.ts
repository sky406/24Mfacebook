import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplikeComponent } from './simplike.component';

describe('SimplikeComponent', () => {
  let component: SimplikeComponent;
  let fixture: ComponentFixture<SimplikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
