import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFacilityComponent } from './contact-facility.component';

describe('ContactFacilityComponent', () => {
  let component: ContactFacilityComponent;
  let fixture: ComponentFixture<ContactFacilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFacilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
