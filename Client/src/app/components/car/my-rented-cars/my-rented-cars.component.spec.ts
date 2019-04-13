import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRentedCarsComponent } from './my-rented-cars.component';

describe('MyRentedCarsComponent', () => {
  let component: MyRentedCarsComponent;
  let fixture: ComponentFixture<MyRentedCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRentedCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRentedCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
