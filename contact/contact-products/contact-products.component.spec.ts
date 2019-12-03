import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactProductsComponent } from './contact-products.component';

describe('ContactProductsComponent', () => {
  let component: ContactProductsComponent;
  let fixture: ComponentFixture<ContactProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
