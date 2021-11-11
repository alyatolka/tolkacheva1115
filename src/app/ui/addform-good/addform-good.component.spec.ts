import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddformGoodComponent } from './addform-good.component';

describe('AddformGoodComponent', () => {
  let component: AddformGoodComponent;
  let fixture: ComponentFixture<AddformGoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddformGoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddformGoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
