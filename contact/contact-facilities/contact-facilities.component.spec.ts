import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFacilitiesComponent } from './contact-facilities.component';

describe('ContactFacilitiesComponent', () => {
  let component: ContactFacilitiesComponent;
  let fixture: ComponentFixture<ContactFacilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFacilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
