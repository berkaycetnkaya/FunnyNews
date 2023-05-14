import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardcComponent } from './cardc.component';

describe('CardcComponent', () => {
  let component: CardcComponent;
  let fixture: ComponentFixture<CardcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
