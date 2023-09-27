import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserproductsComponent } from './view-userproducts.component';

describe('ViewUserproductsComponent', () => {
  let component: ViewUserproductsComponent;
  let fixture: ComponentFixture<ViewUserproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUserproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
